import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({name, category, setName, setCategory, onItemFormSubmit}) {

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => {
          setName(e.target.value)
        }} value = {name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => {
          setCategory(e.target.value)
        }} value = {category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
