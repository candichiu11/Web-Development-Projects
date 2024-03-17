import React, { useEffect, useState } from "react";

function App() {

  const[item, setItem] = useState("");
  const[items, setItems] = useState([]);
 
  function handleChange(event) {
    const {value} = event.target;
    setItem(value);
  }

  function addItem() {
    setItems((prevValue) => [...prevValue, item]);
    setItem(""); 
  }

  useEffect(() => {
    console.log("items:", items);
  }, [items]); // Log items whenever it changes

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

        <div className="form">
          <input onChange={handleChange} type="text" value={item}/>
          <button onClick={addItem}>
          <span>Add</span>
        </button>
        </div>
    
      <div>
        <ul>
          {items.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
