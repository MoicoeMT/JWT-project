import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import injectContext from "./store/appContext";

import Home from "./component/home.jsx";
import Login from "./component/Login.jsx";
import PrivatePage from "./component/PrivatePage.jsx";
import Register from "./component/Register.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<PrivatePage />} path="/private" />
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
