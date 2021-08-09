// import React from "react";
import "./App.css";
import HeaderComponent from './components/layouts/HeaderComponent.js';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserProfile from './pages/sidebar/UserProfile'
import BookList from './components/layouts/booklistComponent.js'

const App = () => (
  <div>
    <HeaderComponent/>
    {/* <UserProfile /> */}
    <BookList />
  </div>
);

export default App;