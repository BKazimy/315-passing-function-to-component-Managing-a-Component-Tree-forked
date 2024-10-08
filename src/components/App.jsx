import React, { useState } from "react";
import ListComp from "./ListComp";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState(["abc"]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    console.log("opted to delet ", id);
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ListComp
              key={index}
              id={index}
              item={todoItem}
              onEvent={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
