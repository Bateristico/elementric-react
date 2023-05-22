import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import '../styles/MapView.css';

const MapWidget = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  return (
    <GoogleMap
      zoom={17}
      center={{ lat: 50.058974535127106, lng: 19.94937301787824 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}

export default MapWidget;
