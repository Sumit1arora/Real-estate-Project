from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.database import get_db
from backend.app.listings import models, schemas
from fastapi.security import OAuth2PasswordBearer
from backend.app.auth.routes import verify_token

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

@router.post("/add", response_model=schemas.PropertyResponse)
def add_property(
    property: schemas.PropertyCreate,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme),
):
    user = verify_token(token, db)
    new_property = models.Property(**property.dict())
    db.add(new_property)
    db.commit()
    db.refresh(new_property)
    return new_property

@router.get("/", response_model=list[schemas.PropertyResponse])
def list_properties(
    db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)
):
    user = verify_token(token, db)
    return db.query(models.Property).all()

@router.get("/{property_id}", response_model=schemas.PropertyResponse)
def get_property(
    property_id: int, db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)
):
    user = verify_token(token, db)
    property = db.query(models.Property).filter(models.Property.id == property_id).first()
    if not property:
        raise HTTPException(status_code=404, detail="Property not found")
    return property