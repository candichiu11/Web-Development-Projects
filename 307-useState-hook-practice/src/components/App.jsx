import React, {useState} from "react";

function App() {
  
  setInterval(getCurrentTime, 1000);

  const now = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(now)

  function getCurrentTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
