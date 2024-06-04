"""Helper functions for the app."""
import hashlib

def hash_password(password: str) -> str:
    """Hashes a password using SHA-256 algorithm.
    
    Args:
        password (str): The plain text password to hash.
    
    Returns:
        str: The hashed password in hexadecimal format.
    """
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    return hashed_password

def verify_password(password: str, hashed_password: str) -> bool:
    """Verifies a password against a hashed password.
    
    Args:
        password (str): The plain text password to verify.
        hashed_password (str): The hashed password to compare against.
    
    Returns:
        bool: True if the password matches the hashed password, False otherwise.
    """
    return hashed_password == hash_password(password)
