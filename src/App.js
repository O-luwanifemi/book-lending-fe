import "./App.css";
import HeaderComponent from './components/layouts/HeaderComponent.js';
// import SignupComponent from "./components/SignupComponent";
import BooksComponent from "./components/BooksComponent";

const App = () => (
  <>
    <HeaderComponent/>
    <BooksComponent/>
  </>
);

// import UserProfile from './pages/sidebar/UserProfile'

// import HistoryComponent from "./components/HistoryComponent";
// import ShelfComponent from "./components/ShelfComponent";
// import { Switch, Route } from "react-router-dom";
    // <HistoryComponent/>
    // <ShelfComponent/>
    // <ShelfComponent/>
    // <SignupComponent/>
    // <UserProfile />
    // <Switch>
    //   <Route exact path="/register" component={SignupComponent} />
    //   <Route exact path="/history" component={HistoryComponent} />
    //   <Route exact path="/shelf" component={ShelfComponent} />
    //   <Route exact path="/profile" component={UserProfile} />
    // </Switch>
export default App;