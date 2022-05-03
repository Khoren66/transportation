import React from "react";
import { useSelector } from "react-redux";
import { getAddressByLatLng } from "../Leaflet/geo_location_address";
import AddressRow from "./address_row";

const AplicationsList = () => {
  const deliveries = useSelector((state) => state.deliveriesList.deliveries);

  const addStartPointDisplayAddress = ({ startPoint }) => {
    const { lat, lng } = startPoint;

    // console.log([lat, lng], "++++++++");
    // const startAddress = getAddressByLatLng([lat, lng]).then((res) => res);

    // console.log(startAddress, "fuck this");
  };

  const addEndPointDisplayAddress = (location) => {
    const { startPoint, endPoint } = location;
    const { startLat, startLng } = startPoint;
    const { endLat, ensLat } = endPoint;
    console.log([startLat, startLng], "++++++++");
    const startAddress = getAddressByLatLng([startLat, startLng]);
    const endAddress = getAddressByLatLng([endLat, ensLat]);
    const res = {
      startAddress,
      endAddress,
      startPoint,
      endPoint,
    };
    // console.log(res, "fuck this");
  };
  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          {/* {console.log(deliveries, "inside list")} */}
          {deliveries.length > 0
            ? deliveries.map((delivery) => {
                // console.log(delivery, "each delivery");
                addStartPointDisplayAddress(delivery);
                return <AddressRow key={delivery.deliveryId} data={delivery} />;
              })
            : ""}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default AplicationsList;
