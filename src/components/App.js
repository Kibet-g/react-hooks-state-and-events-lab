// src/components/App.js
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Add state to toggle dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode on button click
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const appClass = isDarkMode ? "App dark" : "App light"; // Toggle between dark and light class

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"} {/* Button text change */}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
