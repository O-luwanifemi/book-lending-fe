import "./App.css";
import HeaderComponent from './components/layouts/HeaderComponent.js';
import FooterComponent from './components/layouts/FooterComponent.js';
import SignupComponent from "./components/SignupComponent";
import LoginComponent from "./components/LoginComponent";
import UserProfile from './pages/sidebar/UserProfile'
import HistoryComponent from "./components/HistoryComponent";
import ShelfComponent from "./components/ShelfComponent";

import { Switch, Route } from "react-router-dom";

const App = () => (
  <>
    <HeaderComponent/>
      <div style={{ minHeight: '55vh' }}>
        <Switch>
          <Route exact path="/register" component={SignupComponent} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/history" component={HistoryComponent} />
          <Route exact path="/shelf" component={ShelfComponent} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
      </div>
    <FooterComponent/>
  </>
);

export default App;