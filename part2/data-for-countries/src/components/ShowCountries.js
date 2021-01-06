import React, { useState, useEffect } from "react";
import CountryDetail from "./CountryDetail.js";

export default function ShowCountries({ filterText, countries }) {
  const [showCountries, setShowCountries] = useState([]);

  useEffect(() => {
    if (!filterText.length) {
      setShowCountries([]);
      return null;
    }
    let filteredCountries = countries.filter((country) =>
      country.name.match(new RegExp(filterText, "i"))
    );
    if (!filteredCountries.length) {
      setShowCountries([]);
      return null;
    }

    setShowCountries(filteredCountries);

    return () => {};
  }, [filterText, countries]);

  const showContent = () => {
    let result;
    if (showCountries.length > 10) {
      result = "Too many matches, specify another filter";
    } else if (showCountries.length > 1) {
      result = showCountries.map((country, index) => {
        return (
          <div key={country.name}>
            {country.name}{" "}
            <button onClick={() => setShowCountries([showCountries[index]])}>
              show
            </button>
          </div>
        );
      });
    } else if (showCountries.length === 1) {
      result = <CountryDetail country={showCountries[0]} />;
    }

    return result;
  };

  return <div>{showContent()}</div>;
}
