import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form 
        text={userIsRegistered ? "Login" : "Register"}
        isRegistered={userIsRegistered}
      />
    </div>
  );
}

export default App;
