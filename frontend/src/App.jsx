# frontend/src/App.jsx
import React from 'react';
import SearchBox from './components/SearchBox';
import PlaceDetail from './components/PlaceDetail';

function App() {
  const [selectedPlace, setSelectedPlace] = React.useState(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gazetteers Explorer</h1>
      <SearchBox onSelect={setSelectedPlace} />
      {selectedPlace && <PlaceDetail placeId={selectedPlace} />}
    </div>
  );
}

export default App;
