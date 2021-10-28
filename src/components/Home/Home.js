import React from "react";
import Header from "./Header/Header";
import Work from "./Work/Work";
import Properties from "./Properties/Properties";
import DreamHome from "./DreamHome/DreamHome";
import Contact from "./Contact/Contact";
import BuySellRentHome from "./BuySellRentHome/BuySellRentHome";
import UserTestimonials from "./UserTestimonials/UserTestimonials";
import AgentList from "./AgentList/AgentList";

const Home = () => {
  return (
    <div>
      <Header />
      <BuySellRentHome />
      <Work />
      <Properties />
      <DreamHome />
      <UserTestimonials />
      <AgentList />
      <br/>
      <Contact />
    </div>
  );
};

export default Home;
