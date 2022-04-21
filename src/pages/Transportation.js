import React, { useContext, useEffect, useState } from "react";
import AplicationsList from "../components/AplicationsList/aplications_list";
import LeafletMap from "../components/Leaflet/leaflet_map";

const Transportation = () => {
  const [addreses, setAddresses] = useState([]);
  useEffect(() => {}, []);
  return (
    <div style={{ display: "flex" }}>
      <AplicationsList addreses />
      <LeafletMap addreses />
    </div>
  );
};

export default Transportation;
