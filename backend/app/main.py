from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.auth.routes import router as auth_router
from backend.app.listings.routes import router as listings_router
from backend.app.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [*]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth", tags=["Auth"])
app.include_router(listings_router, prefix="/listings", tags=["Listings"])

@app.get("/")
def root():
    return {"message": "Welcome to the Real Estate API!"}