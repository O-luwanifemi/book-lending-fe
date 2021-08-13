import "./App.css";
import HeaderComponent from './components/layouts/HeaderComponent.js';
import { Switch, Route } from 'react-router-dom';
// import SignupComponent from "./components/SignupComponent";
// import BooksComponent from "./components/BooksComponent";
import BookList from "./components/layouts/booklistComponent";



function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={HeaderComponent } />
        <Route exact path="/books" component={BookList} />
      </Switch>
    </>
  );
}

export default App;