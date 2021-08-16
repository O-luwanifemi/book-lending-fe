import checkSession from './utilities/checkSession';
import "./App.css";
import HeaderComponent from './components/layouts/HeaderComponent.js';

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterComponent from './components/layouts/FooterComponent.js';
import SignupComponent from "./components/SignupComponent";
import LoginComponent from "./components/LoginComponent";
import UserProfile from './pages/sidebar/UserProfile'
import HistoryComponent from "./components/HistoryComponent";
import ShelfComponent from "./components/ShelfComponent";
import DashboardComponent from "./components/DashboardComponent";
import FavoriteComponent from './components/FavoriteComponent'; 

import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
checkSession();

const App = () => (
  <>
    <HeaderComponent/>
    
 
      <div style={{ minHeight: '55vh' }}>
        <Switch>
          <Route exact path="/register" component={SignupComponent} />
          <Route exact path="/login" component={LoginComponent} />
          <PrivateRoute exact path="/dashboard" component={DashboardComponent} />
          <PrivateRoute exact path="/history" component={HistoryComponent} />
          <PrivateRoute exact path="/shelf" component={ShelfComponent} />
          <PrivateRoute exact path="/favourites" component={FavoriteComponent} />
          <PrivateRoute exact path="/profile" component={UserProfile} />
        </Switch>
      </div>
    <FooterComponent/>
  </>
);

export default App;