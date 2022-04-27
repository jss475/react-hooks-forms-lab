import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  //add a state change here on the search function
  const [search, setSearch] = useState('')
  const [newArray, setNewArray] = useState(items)

  const [name,setName] = useState('')
  const [category, setCategory] = useState('Produce')


  function handleSearchChange(event){
    setSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleAddedItem(event){
    event.preventDefault()
    let formData = {
      id: uuid(),
      name: name,
      category: category
    }
    setNewArray([...newArray,formData])
  }

  

  const itemsToDisplay = newArray
    .filter(item => {
      if (item.name.toLowerCase().includes(search.toLowerCase()) === true){
        return item
      }
    })
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm  name = {name} category = {category} setName = {setName} setCategory = {setCategory} onItemFormSubmit = {handleAddedItem} />
      <Filter  search = {search} onCategoryChange={handleCategoryChange} onSearchChange = {handleSearchChange}  />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
