import React, { useState } from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function ShoppingList({ items }) {
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleSearchChange = (search) => {
    setSearchText(search);
    filterItems(search, categoryFilter);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setCategoryFilter(category);
    filterItems(searchText, category);
  };

  const filterItems = (search, category) => {
    let newFilteredItems = items;
    if (category !== "All") {
      newFilteredItems = newFilteredItems.filter(
        (item) => item.category === category
      );
    }
    if (search) {
      newFilteredItems = newFilteredItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredItems(newFilteredItems);
  };

  const handleItemFormSubmit = (newItem) => {
    setFilteredItems([...filteredItems, newItem]);
  };

  return (
    <div>
      <Filter
        search={searchText}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <div className="Items">
        {filteredItems.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;