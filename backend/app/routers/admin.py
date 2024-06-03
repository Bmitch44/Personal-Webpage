from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from sqlmodel import Session, select
from dotenv import load_dotenv
import os
from app.database import engine
from app.models import Admin
from app.utils import hash_password, verify_password

load_dotenv()  # load environment variables from .env file

ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
HASHED_PASSWORD = hash_password(os.getenv("ADMIN_PASSWORD"))

admin_router = APIRouter()
security = HTTPBasic()

def get_current_admin(credentials: HTTPBasicCredentials = Depends(security)):
    if credentials.username == ADMIN_EMAIL and verify_password(credentials.password, HASHED_PASSWORD):
        with Session(engine) as session:
            admin = session.exec(select(Admin).where(Admin.email == ADMIN_EMAIL)).first()
            if admin.logged_in:
                return admin
            else:
                raise HTTPException(status_code=401, detail="Admin not logged in")
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")

@admin_router.post("/admin-create")
def admin_create():
    with Session(engine) as session:
        admin = session.exec(select(Admin).where(Admin.email == ADMIN_EMAIL)).first()
        if admin:
            return {"message": "Admin already exists"}
        new_admin = Admin(email=ADMIN_EMAIL, hashed_password=HASHED_PASSWORD)
        session.add(new_admin)
        session.commit()
        return {"message": "Admin created successfully"}

@admin_router.post("/admin-login")
def admin_login(credentials: HTTPBasicCredentials = Depends(security)):
    if credentials.username == ADMIN_EMAIL and verify_password(credentials.password, HASHED_PASSWORD):
        with Session(engine) as session:
            admin = session.exec(select(Admin).where(Admin.email == ADMIN_EMAIL)).first()
            admin.logged_in = True
            session.add(admin)
            session.commit()
        return {"message": "Admin login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@admin_router.get("/admin-logout")
def admin_logout():
    with Session(engine) as session:
        admin = session.exec(select(Admin).where(Admin.email == ADMIN_EMAIL)).first()
        admin.logged_in = False
        session.add(admin)
        session.commit()
    return {"message": "Admin logout successful"}

