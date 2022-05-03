import { Select } from "antd";
import { useEffect, useState } from "react";
import { getAddressByLatLng } from "../Leaflet/geo_location_address";
import { addressSearchProvider } from "./address_search_provider";

const { Option } = Select;

const AddressRow = (data) => {
  const [startAddressText, setStartAddressText] = useState("");
  const [endAddressText, setEndAddressText] = useState("");
  const [foundAddresses, setFoundAddresses] = useState([]);

  useEffect(() => {
    // addressSearchProvider(addressText).then((res) => console.log(res));
  }, []);

  const handleOnChange = (value, addressType) => {
    if (addressType === "startAddress") {
      setStartAddressText(value);
      // console.log(`selected ${value}`);
    } else {
      setEndAddressText(value);
      // console.log(`selected ${value}`);
    }
  };

  const handleOnSearchAddress = (value, addressType) => {
    if (addressType === "startAddress") {
      setStartAddressText(value);
    } else {
      setEndAddressText(value);
    }

    addressSearchProvider(value).then((foundResults) => {
      foundResults.map((fResult) => {
        getAddressByLatLng([fResult.y, fResult.x]).then((res) => {
          fResult.label = res;
        });
      });
      setFoundAddresses(foundResults);
    });
  };

  const handleOnClickOption = (address) => {
    setStartAddressText(address);
  };

  return (
    <tr>
      <td>
        {/* {console.log(data, "deliverydeliverydelivery")} */}
        <Select
          showSearch
          value={startAddressText}
          placeholder="Search start address"
          // optionFilterProp="children"
          style={{ width: "400px" }}
          onChange={(value) => handleOnChange(value, "startAddress")}
          onSearch={(value) => handleOnSearchAddress(value, "startAddress")}
          // filterOption={(input, option) =>
          //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          // }
          // filterSort={(optionA, optionB) =>
          //   optionA.children
          //     .toLowerCase()
          //     .localeCompare(optionB.children.toLowerCase())
          // }
        >
          {foundAddresses.length > 0
            ? foundAddresses.map((address) => {
                return (
                  <Option
                    onClick={() => handleOnClickOption(address.label)}
                    key={address.raw.place_id}
                    value={address.label}
                  >
                    {address.label}
                  </Option>
                );
              })
            : ""}
        </Select>
      </td>

      <td>
        <Select
          showSearch
          value={endAddressText}
          placeholder="Search end address"
          optionFilterProp="children"
          style={{ width: "400px" }}
          onChange={(value) => handleOnChange(value, "endAddress")}
          onSearch={(value) => handleOnSearchAddress(value, "endAddress")}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          {foundAddresses.length > 0
            ? foundAddresses.map((address) => {
                return (
                  <Option
                    onClick={() => handleOnClickOption(address.label)}
                    key={address.raw.place_id}
                    value={address.label}
                  >
                    {address.label}
                  </Option>
                );
              })
            : ""}
        </Select>
      </td>
    </tr>
  );
};
export default AddressRow;
