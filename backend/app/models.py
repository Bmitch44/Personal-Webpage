from sqlmodel import Field, SQLModel

class UserBase(SQLModel):
    username: str
    email: str
    is_active: bool = True
    is_superuser: bool = False


class UserCreate(UserBase):
    password: str


class UserRegister(UserBase):
    email: str
    password: str


class UserUpdate(UserBase):
    email: str
    password: str


class User(UserBase, table=True):
    id: int = Field(default=None, primary_key=True)
    hashed_password: str