from fastapi import FastAPI

from src.api.config import settings
from src.api.routers.health import router as health_router

app = FastAPI(title=settings.app_name, version=settings.version)
app.include_router(health_router)
