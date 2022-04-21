import { Select } from "antd";
import { useEffect, useState } from "react";
import { addressSearchProvider } from "./address_search_provider";

const { Option } = Select;

const StartAddress = () => {
  const [addressText, setAddressText] = useState("");
  const [foundAddresses, setFoundAddresses] = useState([]);

  useEffect(() => {
    // addressSearchProvider(addressText).then((res) => console.log(res));
  }, [foundAddresses.length]);

  const handleOnChange = (value) => {
    setAddressText(value);
    console.log(`selected ${value}`);
  };

  const handleOnSearch = async (value) => {
    // console.log("fuck");
    // const getAddress = async () => await setAddressText(value);

    // console.log("addres has chnaged", addressText);

    await console.log("onChange is working");

    await addressSearchProvider(value)
      .then((res) => {
        // setAddressText(value);
        setAddressText(value);
        console.log("getting new addreses", res);
        // setFoundAddresses(res);
        return res;
      })
      .then((addresses) => setFoundAddresses(addresses));

    // console.log("search:", val);
  };

  const handleOnClickOption = (address) => {
    setAddressText(address);
  };

  return (
    <div>
      <Select
        showSearch
        value={addressText}
        placeholder="Search address"
        dropdownMatchSelectWidth={false}
        // optionFilterProp="children"
        style={{ width: "400px" }}
        onChange={handleOnChange}
        onSearch={handleOnSearch}
        notFoundContent
        // filterOption={(input, option) =>
        //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }
        // filterSort={(optionA, optionB) =>
        //   optionA.children
        //     .toLowerCase()
        //     .localeCompare(optionB.children.toLowerCase())
        // }
      >
        {console.log("it is rendering", foundAddresses)}
        {foundAddresses.length > 0
          ? foundAddresses.map((address) => {
              return (
                <option
                  onClick={() => handleOnClickOption(address.label)}
                  value={address.label}
                ></option>
              );
            })
          : ""}
      </Select>
      <div style={{ marginTop: "10em" }}>
        {foundAddresses.length > 0
          ? foundAddresses.map((address) => {
              return <div>{address.label}</div>;
            })
          : ""}
      </div>
    </div>
  );
};
export default StartAddress;
