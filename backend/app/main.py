"""
Main application file
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

# Importing the database functions
from app.database import create_db_and_tables

# Importing the models
from app.models import Admin

# Importing the routers
from app.routers.admin import admin_router

app = FastAPI()

origins = [
    "http://localhost:5173",
]

# Adding CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Including the routers
app.include_router(admin_router)

# Check if database exists, if not create it
if not os.path.exists("database.db"):
    create_db_and_tables()

@app.get("/")
async def root():
    return {"message": "Hello World"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True) # $ uvicorn backend.app.main:app --reload
