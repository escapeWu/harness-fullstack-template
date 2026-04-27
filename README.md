# harness-fullstack-template

Docs-first fullstack template for small product prototypes: typed FastAPI backend, Next.js frontend boundary, layered docs, and executable tests.

## Structure

- `src/api/` — FastAPI app, routers, services, Pydantic API schemas
- `tests/` — backend unit and API tests
- `frontend/` — Next.js frontend scaffold
- `docs/` — overview, reference docs, feature docs
- `.claude/skills/` — project-local Claude skills for docs workflow and deep analysis
- `data/` — runtime-generated local data, gitignored

## Included Claude skills

- `project-docs-workflow` — docs maintenance orchestrator for non-trivial code changes.
- `project-analysis` — deep read-only project analysis with architecture/dataflow/sequence outputs.

## Backend

```bash
uv sync --extra dev
make test
make run-api
```

## Frontend

```bash
cd frontend
npm install
npm run dev
npm run typecheck
```

Start with `docs/OVERVIEW.md` before extending the template.
