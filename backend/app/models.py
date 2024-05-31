from sqlmodel import Field, SQLModel

class Project(SQLModel, table=True):
    id: int = Field(primary_key=True)
    name: str
    description: str
    details: str
    expanded: str
    tools: list[str]
    url: str
    
class Blog(SQLModel, table=True):
    id: int = Field(primary_key=True)
    title: str
    content: str
    url: str