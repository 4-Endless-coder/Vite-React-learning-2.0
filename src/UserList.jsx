import React from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const userData = [
    { id: 1, name: "Ashesh" },
    { id: 2, name: "Sam" },
    { id: 3, name: "Bruce" },
    { id: 4, name: "Tony" },
    { id: 5, name: "Peter" },
    { id: 6, name: "Rock" },
  ];
  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User list page</h1>
      {userData.map((item) => (
        <div>
          <h4>
            <Link to={"/users/" + item.id}>{item.name}</Link>
          </h4>
        </div>
      ))}

       <h1>User list page with Name in URL</h1>
      {userData.map((item) => (
        <div>
          <h4>
            <Link to={"/users/" + item.id+"/"+item.name}>{item.name}</Link>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default UserList;
