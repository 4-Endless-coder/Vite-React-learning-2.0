import React, { useState } from "react";
import { Activity } from "react";

const App = () => {
  const [showHome, setShowHome] = useState(true);
  return (
    <>
      <h1>Activity in React 19.2</h1>
      <button onClick={() => setShowHome(true)}>Home</button>
      <button onClick={() => setShowHome(false)}>User Form</button>
      <Activity mode={showHome == true ? 'visible' : 'hidden'}>
        <Home />
      </Activity>
      <Activity mode={showHome == false ? 'visible' : 'hidden'}>
        <UserForm />
      </Activity>
    </>
  );
};

const Home = () => {
  return <h1>Home Page</h1>;
};
const UserForm = () => {
  return (
    <div>
      <h1>User Form</h1>
      <input type="text" placeholder="enter name" />
      <input type="text" placeholder="enter name" />
      <input type="text" placeholder="enter name" />
      <input type="text" placeholder="enter name" />
    </div>
  );
};

export default App;
