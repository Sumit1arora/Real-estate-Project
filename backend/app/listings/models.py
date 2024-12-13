from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from backend.app.database import Base

class Property(Base):
    __tablename__ = "properties"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    image = Column(String, nullable=True)
    location = Column(String, nullable=False)
    price = Column(String, nullable=False)
    bedrooms = Column(Integer, nullable=False)
    bathrooms = Column(Integer, nullable=False)
    area = Column(String, nullable=False)
    type = Column(String, nullable=False)
    featured = Column(Boolean, default=False)