import Home from "./pages/Home";
import Menu from "./pages/Menu";
import New from "./pages/New";
import Contact from "./pages/Contact";
import logo from "./assets/logo.png"; 


import "./App.scss";

import * as React from "react";
//Crear rutas, es para moverse entre la app aunque sea SPA
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const routes = [
    { path: "/", component: <Home/> },
    { path: "/home", component: <Home/> },
    { path: "/menu", component: <Menu/> },
    { path: "/new", component: <New/> },
    { path: "/contact", component: <Contact/> }, 
  ];

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.path) {
        return (
          <Route path={route.path} element={route.component} key={index} />
        );
      }

      return null;
    });

  return (
    <div className="container">
      <div className="navbar">
        <img src={logo} className="logo" />{" "}
        <div>
          <div className="topNav">
            <h2>Home</h2>
            <h2>Menu</h2>
            <h2>New</h2>
            <h2>Contact</h2>
          </div>
        </div>
      </div>
      <div className="mainContent">
        <Router>
          <Routes>{getRoutes(routes)}</Routes>
        </Router>
      </div>
    </div>
  );
}
export default App;
