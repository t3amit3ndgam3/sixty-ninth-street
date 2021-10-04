import "./App.css";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import PropertiesList from "./components/PropertiesList/PropertiesList";
import TEST from "./components/TEST.js";


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/properties">
          <PropertiesList />
        </Route>
        <Route exact path="/test">
          <TEST />
        </Route>
      </Switch>
     </Router>
  );
}

export default App;
