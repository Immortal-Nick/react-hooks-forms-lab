import React, { useState } from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  const [localSearch, setLocalSearch] = useState(search);

  const handleSearchChange = (event) => {
    setLocalSearch(event.target.value);
    onSearchChange(event.target.value);
  };

  React.useEffect(() => {
    setLocalSearch(search);
  }, [search]);

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={localSearch}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;