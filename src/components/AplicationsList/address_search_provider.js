import { OpenStreetMapProvider } from "leaflet-geosearch";

// setup
const provider = new OpenStreetMapProvider();

export const addressSearchProvider = (addressText) => {
  // console.log(addressText, "address");
  return provider.search({ query: `${addressText}` }).then((result) => result);
};
