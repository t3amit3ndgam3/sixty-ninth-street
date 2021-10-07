import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import SinglePageProperty from "./components/SinglePageProperty/SinglePageProperty";
import AppointmentFeatureDetails from "./components/Home/FeatureDetails/FeatureDetails";

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
            <Route path="/feature" component={AppointmentFeatureDetails} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
