import React from "react";
import NavBar from "./NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import PageNotFound from "./PageNotFound";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users/list?" element={<UserList/>}/>

          <Route path="/users/:id/:name?" element={<UserDetail />}/>

          <Route path="in">
            <Route path="/in/user">
              <Route path="/in/user/login" element={<Login />} />
              <Route path="/in/user/about" element={<About />} />
            </Route>
          </Route>
        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
};

export default App;
