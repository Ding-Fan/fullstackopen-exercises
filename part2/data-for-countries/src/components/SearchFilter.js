import React from "react";

export default function SearchFilter({ filterText, setFilterText }) {
  return (
    <div>
      find countries
      <input
        type="text"
        value={filterText}
        onChange={(event) => setFilterText(event.target.value.trim())}
      />
    </div>
  );
}
