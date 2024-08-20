import React, { useState } from "react";
import MapContainer from "./MapContainer";
import "./index.css"

const Home = () => {
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLng, setSelectedLng] = useState(null);

  // Callback to handle selected location
  const handleSelectPoint = (lat, lng) => {
    setSelectedLat(lat);
    setSelectedLng(lng);
    // You can perform additional actions here, such as updating other states or making API calls
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-4">
      <h1 className="text-2xl font-semibold mb-4 mt-4">Home</h1>
      <div className="homemap w-full h-full">
        <MapContainer onSelectPoint={handleSelectPoint} />
      </div>
      
    </div>
  );
};

export default Home;
