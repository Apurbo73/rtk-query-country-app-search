import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <div className="d-flex container flex-wrap">
      {countries &&
        countries.map(country =>
          <Country key={country.id} country={country} />
        )}
    </div>
  );
};

export default Countries;
