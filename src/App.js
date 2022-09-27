import Home2 from "./pages/Home2";
import Menu from "./pages/Menu";
import New from "./pages/New";
import Contact from "./pages/Contact";



import "./App.scss";

import * as React from "react";
//Crear rutas, es para moverse entre la app aunque sea SPA
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const routes = [
    { path: "/", component: <Home2/> },
    { path: "/home", component: <Home2/> },
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

        <Router>
          <Routes>{getRoutes(routes)}</Routes>
        </Router>
      
  );
}
export default App;
