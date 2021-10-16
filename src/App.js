import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import SinglePageProperty from "./components/SinglePageProperty/SinglePageProperty";
import PropertiesList from "./components/PropertiesList/PropertiesList";
import Navbar from "./components/Home/Navbar/Navbar";
import AppointmentFeatureDetails from "./components/Home/FeatureDetails/FeatureDetails";
import AddProperty from "./components/AddProperty/AddProperty";
import AgentsPage from "./components/AgentsPage/AgentsPage";
import UserDashboard from "./Dashboard/UserDashboard";
import Test from "./Test/Test";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/properties" component={PropertiesList} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/spp" component={SinglePageProperty} />
            <Route path="/feature" component={AppointmentFeatureDetails} />
            <Route exact path="/addProperty" component={AddProperty} />
            <Route exact path="/agents" component={AgentsPage} />
            <Route exact path="/dashboard" component={UserDashboard} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
