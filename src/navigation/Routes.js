import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../components/Home"
import Header from "../components/Header";

export default function NavigationRoutes(){
  return(
    <Router>
        <Header/>
      <Routes>
          <Route path="/home" element={<Home />}/>
        </Routes>
    </Router>
  );
}