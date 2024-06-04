import pytest
from fastapi.testclient import TestClient
from app.main import app

from dotenv import load_dotenv
import os

load_dotenv()  # load environment variables from .env file

EMAIL = os.getenv("ADMIN_EMAIL")
PASSWORD = os.getenv("ADMIN_PASSWORD")

client = TestClient(app)

def test_admin():
    # create admin
    response = client.post("/admin-create")
    assert response.status_code == 200
    # Test with valid credentials
    response = client.post("/admin-login", auth=(EMAIL, PASSWORD))
    assert response.status_code == 200
    assert response.json() == {"message": "Admin login successful"}

    # Test with invalid credentials
    response = client.post("/admin-login", auth=(EMAIL, "wrong_password"))
    assert response.status_code == 401
    assert response.json() == {"detail": "Invalid credentials"}

    # Test with invalid email
    response = client.post("/admin-login", auth=("wrong_email", PASSWORD))
    assert response.status_code == 401
    assert response.json() == {"detail": "Invalid credentials"}

    # Test logout
    response = client.get("/admin-logout")
    assert response.status_code == 200
    assert response.json() == {"message": "Admin logout successful"}