import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchFilter from "./components/SearchFilter.js";
import ShowCountries from "./components/ShowCountries.js";
import useCancelableAsync from "./hooks/useCancelableAsync.js";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterText, setFilterText] = useState("");

  useCancelableAsync((theAbortController) => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      if (theAbortController.signal.aborted) return;
      setCountries(response.data);
    });

    return () => {};
  }, []);

  return (
    <div className="App">
      <SearchFilter filterText={filterText} setFilterText={setFilterText} />
      <ShowCountries filterText={filterText} countries={countries} />
    </div>
  );
}

export default App;
// Exercises 2.11.-2.14.
