import { Switch, Route } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/layouts/HeaderComponent";
import PrivateRoute from "./common/PrivateRoute";
import FooterComponent from './components/layouts/FooterComponent.js';
import SignupComponent from "./components/SignupComponent";
import LoginComponent from "./components/LoginComponent";
import UserProfile from './pages/UserProfile/UserProfile';
import DashboardComponent from "./components/DashboardComponent";
import BooksComponent from './components/BooksComponent'


const App = () => (
  <>
    <HeaderComponent/>
      <div style={{ minHeight: '55vh' }}>
        <Switch>
          <Route exact path="/register" component={SignupComponent} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/books" component={BooksComponent} />
          <PrivateRoute exact path="/dashboard" component={DashboardComponent} />
          <PrivateRoute exact path="/profile" component={UserProfile} />
        </Switch>
      </div>
    <FooterComponent/>
  </>
)

export default App;