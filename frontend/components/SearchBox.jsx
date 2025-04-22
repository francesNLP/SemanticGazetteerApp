import React, { useState } from 'react';
import axios from '../api/api';

function SearchBox({ onSelect }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await axios.get(`/search?q=${query}`);
    setResults(res.data);
  };

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} className="border p-2 mr-2" />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2">Search</button>
      <ul>
        {results.map((r, i) => (
          <li key={i} onClick={() => onSelect(r._source.name)} className="cursor-pointer hover:underline">{r._source.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBox;
