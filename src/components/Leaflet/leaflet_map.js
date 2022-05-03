import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./leaflet_map.css";
import { maptiler } from "./osm_provider";
import RoutingMachine from "./routing";
import { getAddressByLatLng, getLatLngByAddress } from "./geo_location_address";
import { addressSearchProvider } from "../AplicationsList/address_search_provider";

const LeafletMap = () => {
  const centerPosition = [55.7504461, 37.6174943];
  const startPoint = [40.17724430532858, 44.51706178235342];
  const endPoint = [40.07724430532858, 44.51706178235342];

  useEffect(() => {
    // getAddressByLatLng(centerPosition);
    getLatLngByAddress("Վարդանանց փողոց, Նուբարաշենի խճուղի");
  }, []);

  return (
    <MapContainer center={centerPosition} zoom={13} scrollWheelZoom={true}>
      <TileLayer attribution={maptiler.attribution} url={maptiler.url} />
      <Marker
        eventHandlers={{
          moveend: (e) => {
            console.log("marker clicked", e);
          },
        }}
        draggable={true}
        position={centerPosition}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <RoutingMachine startPoint={startPoint} endPoint={endPoint} />
    </MapContainer>
  );
};

export default LeafletMap;
