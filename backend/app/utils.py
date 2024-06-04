"""Helper functions for the app."""
import hashlib

def hash_password(password: str) -> str:
    """Hashes a password using SHA-256 algorithm."""
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    return hashed_password

def verify_password(password: str, hashed_password: str) -> bool:
    """Verifies a password against a hashed password."""
    return hashed_password == hash_password(password)