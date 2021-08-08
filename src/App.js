// import React from "react";
import "./App.css";
import HeaderComponent from './components/layouts/HeaderComponent.js';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProfile from './pages/sidebar/UserProfile'

const App = () => (
  <div>
    <HeaderComponent/>
    <UserProfile />
  </div>
);

export default App;