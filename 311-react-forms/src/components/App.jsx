import React from "react";
import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  function handleChange(event) {
     const newName = event.target.value;
     setName(newName);
  }

  const handleSubmit = (event) => {
    setIsClicked(true);
    event.preventDefault();
  };

  return (
    <div className="container">
      <h1>Hello {isClicked ? name : ""}</h1>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          type="text" placeholder="What's your name?"
          value={name} />
        <button type="submit">Submit</button>
      </form>  
    </div>
  );
}

export default App;
