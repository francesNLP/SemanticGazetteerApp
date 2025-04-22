from fastapi import FastAPI, Query
from backend.sparql_client import query_kg
from backend.es_client import search_places
from backend.dataframe_loader import get_place_data

app = FastAPI()

@app.get("/search")
def search(q: str = Query(...)):
    return search_places(q)

@app.get("/place/{place_id}")
def place_details(place_id: str):
    df_data = get_place_data(place_id)
    sparql_data = query_kg(f"""
        SELECT ?p ?o WHERE {{ <http://example.org/place/{place_id}> ?p ?o }}
    """)
    return {"rdf": sparql_data, "dataframe": df_data}

@app.post("/sparql-query")
def run_sparql(query: str):
    return query_kg(query)

@app.get("/table/{edition}")
def get_table(edition: str):
    return get_place_data(edition=edition)

# backend/sparql_client.py
from SPARQLWrapper import SPARQLWrapper, JSON

def query_kg(query: str):
    sparql = SPARQLWrapper("http://fuseki:3030/gazetteers/sparql")
    sparql.setQuery(query)
    sparql.setReturnFormat(JSON)
    results = sparql.query().convert()
    return results["results"]["bindings"]
