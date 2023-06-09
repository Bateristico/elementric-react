import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import '../styles/GoogleMap.css';

const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  // initialize a center of the map
  const center = useMemo(
    () => ({
      lat: 50.058974535127106,
      lng: 19.94937301787824,
    }),
    []
  );
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 50.058974535127106, lng: 19.94937301787824 }}
      mapContainerClassName="map-container"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Maps;
