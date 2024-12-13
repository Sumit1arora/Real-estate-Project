from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from backend.app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    preferences = relationship('UserPreferences', back_populates='user', cascade='all, delete')
    activity = relationship('UserActivity', back_populates='user', cascade='all, delete')
