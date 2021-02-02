import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState("")

  function handleClick(){
    setInCart("in-cart")

  }
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
