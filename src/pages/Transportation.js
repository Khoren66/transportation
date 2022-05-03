import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AplicationsList from "../components/AplicationsList/aplications_list";
import LeafletMap from "../components/Leaflet/leaflet_map";
import { getDeliveries } from "../redux/reducers/deliveries";

const Transportation = () => {
  const dispatch = useDispatch();
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    dispatch(getDeliveries());
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <AplicationsList />
      <LeafletMap />
    </div>
  );
};

export default Transportation;
