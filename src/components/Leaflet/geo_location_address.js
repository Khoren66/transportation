import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAvktpXQBCWnddLPWfLubqM8qEJXYFcSrQ");

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
Geocode.setRegion("am");

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

// Get formatted address, city, state, country from latitude & longitude when
// Geocode.setLocationType("ROOFTOP") enabled
// the below parser will work for most of the countries
export const getAddressByLatLng = (location) => {
  Geocode.fromLatLng(...location).then((response) => {
    // console.log(response.results[0].formatted_address);
    return response.results[0].formatted_address;
  });
};
// Get latitude & longitude from address.
export const getLatLngByAddress = (address) =>
  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      return [lat, lng];
    },
    (error) => {
      console.error(error);
    }
  );
