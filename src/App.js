import "./App.css";
import Home from "./components/Home/Home";
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import SinglePageProperty from "./components/SinglePageProperty/SinglePageProperty";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/spp" component={SinglePageProperty} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
>>>>>>> main
  );
}

export default App;
