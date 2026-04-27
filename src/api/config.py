from pydantic import BaseModel


class Settings(BaseModel):
    app_name: str = "harness-fullstack-template"
    version: str = "0.1.0"


settings = Settings()
