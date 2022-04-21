import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({ startPoint, endPoint }, otherProps) => {
  const instance = L.Routing.control({
    waypoints: [L.latLng(...startPoint), L.latLng(...endPoint)],
    ...otherProps,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
