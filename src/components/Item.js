// src/components/Item.js
import React, { useState } from "react";

function Item({ name, category }) {
  // Add state to track whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Toggle the cart state when the button is clicked
  const toggleCart = () => {
    setInCart((prev) => !prev);
  };

  return (
    <li className={inCart ? "in-cart" : ""}> {/* Conditionally apply class */}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"} {/* Change button text */}
      </button>
    </li>
  );
}

export default Item;
