import React from "react";
import CaptialWeather from "./CaptialWeather.js";

export default function CountryDetail({ country }) {
  return (
    <div>
      <h1> {country.name} </h1>
      <div>capital {country.capital} </div>
      <div>population {country.population} </div>
      <h2>languages</h2>
      <ul>
        {country.languages.map((language) => {
          return <li key={language.name}>{language.name}</li>;
        })}
      </ul>
      <img style={{ width: "300px" }} src={country.flag} alt={country.name} />
      <CaptialWeather capital={country.capital} />
    </div>
  );
}
