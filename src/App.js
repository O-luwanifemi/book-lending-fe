import React from "react";
import "./App.css";
import HeaderComponent from './components/layouts/HeaderComponent.js';
import Favorite from "./pages/sidebar/Favourite";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <div>
    <HeaderComponent/>
    <Favorite />
  </div>
);

export default App;