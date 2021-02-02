import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [darkOrLight, setDarkOrLight] = useState(false)
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function handleClick(){
    setDarkOrLight(!darkOrLight)

  }

  return (
    <div className={"App " + (darkOrLight ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{darkOrLight ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
