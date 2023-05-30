import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

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
      zoom={12}
      center={{ lat: 50.058974535127106, lng: 19.94937301787824 }}
      mapContainerClassName="map-container-widget"
    ></GoogleMap>
  );
}

export default MapWidget;
