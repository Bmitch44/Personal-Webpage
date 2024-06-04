from fastapi import APIRouter, Depends, HTTPException, Body
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from sqlmodel import Session, select
from dotenv import load_dotenv
import logging
import os
from app.database import engine
from app.models import Admin, AdminCreate
from app.utils import hash_password, verify_password

load_dotenv()  # load environment variables from .env file

# Configure logging
logging.basicConfig(filename='app/logs/logfile.log', level=logging.INFO)

ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
HASHED_PASSWORD = hash_password(os.getenv("ADMIN_PASSWORD"))

admin_router = APIRouter()

@admin_router.post("/admin-create")
def admin_create():
    with Session(engine) as session:
        logging.info("Creating admin")
        admin = session.exec(select(Admin).where(Admin.email == ADMIN_EMAIL)).first()
        if admin:
            return {"message": "Admin already exists"}, 200
        new_admin = Admin(email=ADMIN_EMAIL, hashed_password=HASHED_PASSWORD)
        logging.info(f"Admin created with email: {new_admin.email}")
        session.add(new_admin)
        session.commit()
        return {"message": "Admin created successfully"}, 200

@admin_router.post("/admin-login")
def admin_login(credentials: AdminCreate):
    email = credentials.email
    password = credentials.password
    logging.info(f"Admin login attempt with email: {email}")
    if email == ADMIN_EMAIL and verify_password(password, HASHED_PASSWORD):
        logging.info(f"Email and password match for email: {email}")
        with Session(engine) as session:
            admin = session.exec(select(Admin).where(Admin.email == ADMIN_EMAIL)).first()
            admin.logged_in = True
            session.add(admin)
            session.commit()
        return {"message": "Admin login successful"}, 200
    raise HTTPException(status_code=401, detail="Invalid credentials")

@admin_router.get("/admin-logout")
def admin_logout():
    with Session(engine) as session:
        admin = session.exec(select(Admin).where(Admin.email == ADMIN_EMAIL)).first()
        admin.logged_in = False
        session.add(admin)
        session.commit()
    return {"message": "Admin logout successful"}, 200

