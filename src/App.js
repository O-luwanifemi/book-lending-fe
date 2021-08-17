import { Switch, Route } from "react-router-dom";
import Cards from "./pages/cover-page/Cards";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import PrivateRoute from "./common/PrivateRoute";
import checkSession from "./utilities/checkSession";

import FooterComponent from "./components/layouts/FooterComponent.js";
import SignupComponent from "./components/SignupComponent";
import LoginComponent from "./components/LoginComponent";
import UserProfile from "./pages/UserProfile/UserProfile";
import HistoryListComponent from "./components/layouts/HistoryListComponent";
import ShelfListComponent from "./components/layouts/ShelfListComponent";
import DashboardComponent from "./components/DashboardComponent";
import FavoriteComponent from "./components/FavoriteComponent";
import WishList from "./pages/WishList/WishList";
import Books from "./pages/Books/Books";

checkSession();

const App = () => (
  <>
    <main id="main" style={{ minHeight: "90vh", width: "100%" }}>
      <Switch>
        <Route exact path="/register" component={SignupComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <PrivateRoute exact path="/dashboard" component={DashboardComponent} />
        <PrivateRoute exact path="/history" component={HistoryListComponent} />
        <PrivateRoute exact path="/shelf" component={ShelfListComponent} />
        <PrivateRoute exact path="/favorites" component={FavoriteComponent} />
        <PrivateRoute exact path="/profile" component={UserProfile} />
        <PrivateRoute exact path="/wishlist" component={WishList} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/" component={Books} />
      </Switch>
    </main>
    <Cards />
    <FooterComponent />
  </>
);

export default App;
