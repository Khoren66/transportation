import React from "react";
import AddressRow from "./address_row";

const AplicationsList = () => {
  return (
    <div>
      <table>
        {[1, 2, 3, 4].map(() => {
          return <AddressRow />;
        })}
      </table>
    </div>
  );
};

export default AplicationsList;
