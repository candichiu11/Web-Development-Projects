import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://profile-images.xing.com/images/10f6625d45fa7faa66de4873c52642d2-1/candi-chiu.1024x1024.jpg"/>
      {contacts.map(createCard)}
      
    </div>
  );
}

export default App;
