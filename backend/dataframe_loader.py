# backend/dataframe_loader.py
import pandas as pd
import glob

# Cache all editions
dfs = {f.split("/")[-1]: pd.read_parquet(f) for f in glob.glob("data/gazetteers_*.parquet")}

def get_place_data(place_id: str = None, edition: str = None):
    if edition:
        return dfs.get(f"gazetteers_{edition}.parquet", pd.DataFrame()).to_dict("records")
    else:
        # Search all editions for place_id
        results = []
        for df in dfs.values():
            matched = df[df['name'].str.contains(place_id, case=False, na=False)]
            results.extend(matched.to_dict("records"))
        return results
