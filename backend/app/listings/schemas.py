from pydantic import BaseModel

class PropertyBase(BaseModel):
    name: str
    image: str
    location: str
    price: str
    bedrooms: int
    bathrooms: int
    area: str
    type: str
    featured: bool

class PropertyCreate(PropertyBase):
    pass

class PropertyResponse(PropertyBase):
    id: int

    class Config:
        orm_mode = True