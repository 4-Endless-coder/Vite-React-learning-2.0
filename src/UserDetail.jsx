import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserDetail = () => {
  const paramsData =useParams();
  console.log(paramsData.id);
  
  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User Detail page</h1>
      <h2>User id is:{paramsData.id}</h2>
      <h3><Link to="/users" >Back</Link></h3>
    </div>
  );
};

export default UserDetail;
