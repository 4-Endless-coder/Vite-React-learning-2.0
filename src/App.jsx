import { useState } from "react";
import College from "./College";
import Student from "./Student";
import User from "./User";

function App() {
  // let userName=" Ashesh Dash";
  // let age = 25;
  // let email= "ashesh@test2.com";

  let userObj= {
    name:"Ashesh Dash",
    age:25,
    email:"ashesh@test.com"
  }
  let userObj2= {
    name:"Peter",
    age:20,
    email:"peter@test.com"
  }
  let userObj3= {
    name:"Bruce",
    age:31,
    email:"Bruce@test.com"
  }

  let collegeNames = ['IIT', 'MIT', 'IET', 'NIT', 'DU' ]
  const [student,setStudent]= useState()
  return (
    <div>
      <h1>Props in React js</h1>
      <button onClick={()=>setStudent('bhasker')}>Update Student Name</button>

      {student && <Student name={student} />}

      <College name={collegeNames[2]}/>
       {/* <User name={userName} age={age} email={email}/> */}
        <User user={userObj} /> 
        <User user={userObj2} /> 
        <User user={userObj3} /> 
        
    </div>
  );
};

export default App;