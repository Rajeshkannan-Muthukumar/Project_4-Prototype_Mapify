import React, { useState } from 'react';
import Location from './Location';
const RailwayStationLocator = () => {
  const [dlocation, setdLocation] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState('');

  const fetchGeocode = async (dlocation) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(dlocation)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setCoordinates({ lat, lon });
        setError(''); // Clear any previous errors
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      console.error('Geocoding API error:', error);
      setError('Error retrieving coordinates. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGeocode(dlocation);
  };

  return (
    <div>
      <h1>Find Railway Station Coordinates</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={dlocation}
          onChange={(e) => setdLocation(e.target.value)}
          placeholder="Enter railway station name"
          required
        />
        <button type="submit">Get Coordinates</button>
      </form>
      {coordinates && (
        <div>
          <p>Destination Latitude: {coordinates.lat}</p>
          <p>Destination Longitude: {coordinates.lon}</p>
          <Location dlatitude ={coordinates.lat} dlongitude ={coordinates.lon} ></Location>
        </div>
      )}
      {error && (
        <div style={{ color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default RailwayStationLocator;
