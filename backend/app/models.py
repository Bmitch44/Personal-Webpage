from typing import List
from sqlmodel import Field, SQLModel

class Admin(SQLModel, table=True):
    id: int = Field(primary_key=True)
    email: str
    hashed_password: str
    logged_in: bool = False
    session_id: str

class AdminCreate(SQLModel):
    email: str
    password: str

class AdminCheck(SQLModel):
    session_id: str

class Project(SQLModel, table=True):
    id: int = Field(primary_key=True)
    name: str
    description: str
    details: str
    expanded: str
    tools: str # List[str]
    url: str
    
class Blog(SQLModel, table=True):
    id: int = Field(primary_key=True)
    title: str
    content: str
    url: str