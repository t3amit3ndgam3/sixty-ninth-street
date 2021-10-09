import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import SinglePageProperty from "./components/SinglePageProperty/SinglePageProperty";
import UserDashboard from "./components/Dashboard/UserDashboard";
import PropertiesList from "./components/PropertiesList/PropertiesList"
import Navbar from "./components/Home/Navbar/Navbar"

import AppointmentFeatureDetails from "./components/Home/FeatureDetails/FeatureDetails";
import AddProperty from "./components/AddProperty/AddProperty";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/properties" component={PropertiesList} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/spp" component={SinglePageProperty} />
            <Route path="/userDashboard" component={UserDashboard} />
            <Route path="/feature" component={AppointmentFeatureDetails} />
            <Route path="/addProperty" component={AddProperty} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
