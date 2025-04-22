# frontend/src/components/PlaceDetail.jsx
import React, { useEffect, useState } from 'react';
import axios from '../api/api';

function PlaceDetail({ placeId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`/place/${placeId}`).then(res => setData(res.data));
  }, [placeId]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Details for {placeId}</h2>
      <h3 className="font-bold">Descriptions:</h3>
      <ul>{data.dataframe.map((entry, i) => (
        <li key={i}>{entry.description}</li>
      ))}</ul>
      <h3 className="font-bold mt-4">RDF Triples:</h3>
      <ul>{data.rdf.map((triple, i) => (
        <li key={i}>{triple.p.value} → {triple.o.value}</li>
      ))}</ul>
    </div>
  );
}

export default PlaceDetail;
