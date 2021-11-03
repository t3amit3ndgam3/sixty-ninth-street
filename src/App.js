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
import SingleAgent from "./components/SingleAgent/SingleAgent";
import UserDashboard from "./UserDashboard/UserDashboard";
import UserReviews from "./components/UserReviews/UserReviews";
import AddAgents from "./components/AddAgents/AddAgents";
import SellHome from "./components/SellHome/SellHome";
import Footer from "./components/Home/Footer/Footer";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import HomeLoanForm from "./components/HomeLoan/HomeLoanForm";
import HomeLoan from "./components/HomeLoan/HomeLoan";
import SellDetails from "./components/Home/WorkDetails/SellDetails";
import BuyDetails from "./components/Home/WorkDetails/BuyDetails";
import AgentRoleDetails from "./components/Home/WorkDetails/AgentRoleDetails";
import AgentDashboard from "./AgentDashboard/AgentDashboard";
import PorpertiesListPage from "./Test/PorpertiesListPage";
function App() {
  const wishlist = JSON.parse(localStorage.getItem("69wishlist") || "[]");
  if (wishlist.length === 0) {
    wishlist.push({
      image: "",
      name: "",
      key: "",
      price: "",
      bed: "",
      bath: "",
      size: "hide",
    });
    localStorage.setItem("69wishlist", JSON.stringify(wishlist));
  }
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={UserDashboard} />
            <Route exact path="/adminDashboard" component={AdminDashboard} />
            <Route exact path="/agentDashboard" component={AgentDashboard} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <div>
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/properties" component={PropertiesList} />
              <Route exact path="/spp/:id" component={SinglePageProperty} />
              <Route path="/feature" component={AppointmentFeatureDetails} />
              <Route exact path="/addProperty" component={AddProperty} />
              <Route exact path="/agents" component={AgentsPage} />
              <Route exact path="/singleAgent/:id" component={SingleAgent} />
              <Route exact path="/userReview" component={UserReviews} />
              <Route exact path="/addAgents" component={AddAgents} />
              <Route exact path="/sellHome" component={SellHome} />
              <Route exact path="/loan" component={HomeLoanForm} />
              <Route exact path="/homeLoan" component={HomeLoan} />
              <Route exact path="/selldetails" component={SellDetails} />
              <Route exact path="/test" component={PorpertiesListPage} />
              <Route
                exact
                path="/agentroledetails"
                component={AgentRoleDetails}
              />
              <Route exact path="/buydetails" component={BuyDetails} />
              <Footer />
            </div>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}
export default App;
