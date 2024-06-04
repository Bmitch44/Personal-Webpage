from fastapi import APIRouter, Header, HTTPException, Body
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from sqlmodel import Session, select
from dotenv import load_dotenv
import logging
import os
from uuid import uuid4

from app.database import engine
from app.models import Admin, AdminCreate, AdminCheck
from app.utils import hash_password, verify_password

load_dotenv()  # load environment variables from .env file

# Configure logging
logging.basicConfig(filename='app/logs/logfile.log', level=logging.INFO)

ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
HASHED_PASSWORD = hash_password(os.getenv("ADMIN_PASSWORD")) # Hash the password

admin_router = APIRouter()

@admin_router.post("/admin-create")
def admin_create():
    """Create an admin user with the email and password provided in the .env file."""
    with Session(engine) as session:
        logging.info("Creating admin")
        admin = session.exec(select(Admin).where(Admin.email == ADMIN_EMAIL)).first()
        if admin:
            return {"message": "Admin already exists"}, 200
        new_admin = Admin(email=ADMIN_EMAIL, hashed_password=HASHED_PASSWORD, session_id=str(uuid4()))
        logging.info(f"Admin created with email: {new_admin.email}")
        session.add(new_admin)
        session.commit()
        return {"message": "Admin created successfully"}, 200

@admin_router.post("/admin-login")
def admin_login(credentials: AdminCreate):
    """Login an admin user with the email and password provided"""
    email = credentials.email
    password = credentials.password
    logging.info(f"Admin login attempt with email: {email}")
    logging.info(f"Password: {password}")
    logging.info(f"Hashed Password: {os.getenv('ADMIN_PASSWORD')}")
    logging.info(f"Password Verification: {verify_password(password, HASHED_PASSWORD)}")
    logging.info(f"Email Verification: {email == ADMIN_EMAIL}")
    if email == ADMIN_EMAIL and verify_password(password, HASHED_PASSWORD):
        logging.info(f"Email and password match for email: {email}")
        with Session(engine) as session:
            admin = session.exec(select(Admin).where(Admin.email == ADMIN_EMAIL)).first()
            admin.logged_in = True
            session.add(admin)
            session.commit()
            return admin.session_id, 200
    raise HTTPException(status_code=401, detail="Invalid credentials")

@admin_router.get("/admin-logout")
def admin_logout():
    """Logout an admin user"""
    with Session(engine) as session:
        admin = session.exec(select(Admin).where(Admin.email == ADMIN_EMAIL)).first()
        admin.logged_in = False
        session.add(admin)
        session.commit()
    return {"message": "Admin logout successful"}, 200

@admin_router.post("/check-session")
def check_session(session_body: AdminCheck):
    """Check if the session_id in the headers matches the session_id in the Admin table"""
    session_id = session_body.session_id
    logging.info(f"Checking session with session_id: {session_id}")
    with Session(engine) as session:
        admin = session.exec(select(Admin).where(Admin.session_id == session_id)).first()
        if admin:
            admin.logged_in = True
            session.add(admin)
            session.commit()
            return {"message": "Session valid"}, 200
        raise HTTPException(status_code=401, detail="Invalid session")