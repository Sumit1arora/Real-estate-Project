import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    def __init__(self):
        self.database_hostname = os.getenv("DATABASE_HOSTNAME")
        self.database_port = os.getenv("DATABASE_PORT")
        self.database_password = os.getenv("DATABASE_PASSWORD")
        self.database_name = os.getenv("DATABASE_NAME")
        self.database_username = os.getenv("DATABASE_USERNAME")
        self.secret_key = os.getenv("SECRET_KEY")
        self.algorithm = os.getenv("ALGORITHM")
        self.access_token_expire_minutes = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30))

settings = Settings()

print(settings.secret_key)
