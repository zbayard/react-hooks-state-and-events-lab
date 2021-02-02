import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filterBy, setFilterBy] = useState("All")

  function handleFilterChange(event){
    setFilterBy(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if(filterBy === "All"){
      return true;
    }else{
      return item.category === filterBy;
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
