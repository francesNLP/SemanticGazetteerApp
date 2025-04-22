# backend/es_client.py
from elasticsearch import Elasticsearch

es = Elasticsearch("http://elasticsearch:9200")

def search_places(query: str):
    result = es.search(index="gazetteers", query={"match": {"description": query}})
    return result["hits"]["hits"]

