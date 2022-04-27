import React, {useState} from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {

  return (
    <div className="Filter">
      {/* add an on change for the input below  */}
      <input type="text" name="name" placeholder='Search...' onChange={onSearchChange} value = {search}/>
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
