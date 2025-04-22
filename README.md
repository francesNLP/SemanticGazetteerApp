# Gazetteers Semantic Web Explorer

This application allows semantic, textual, and tabular exploration of historical Scottish Gazetteer data (1802–1903).

## Stack
- React + FastAPI
- Elasticsearch for full-text search
- RDF Triple Store (Fuseki)
- Pandas + Parquet for tabular data

## Quickstart (Recommended via Docker)
```bash
make docker-up
```

## Manual Setup
```bash
make setup         # Python backend
make npm-setup     # Frontend React
```

Then run:
```bash
uvicorn backend.main:app --reload
cd frontend && npm start
``````

Then visit [http://localhost:8000/docs](http://localhost:8000/docs) for API or frontend at your preferred port.

