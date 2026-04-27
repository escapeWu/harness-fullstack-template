.PHONY: sync test run-api frontend-install frontend-typecheck frontend-build verify

sync:
	uv sync --extra dev

test:
	uv run pytest tests/ -v

run-api:
	uv run uvicorn src.api.app:app --host 0.0.0.0 --port 8000

frontend-install:
	cd frontend && npm install

frontend-typecheck:
	cd frontend && npm run typecheck

frontend-build:
	cd frontend && npm run build

verify: test frontend-typecheck
