import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Work from "./Work/Work";
import Properties from "./Properties/Properties";
import Testimonials from "./Testimonials/Testimonials";
import DreamHome from "./DreamHome/DreamHome";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";

import BuySellRentHome from "./BuySellRentHome/BuySellRentHome";
import AgentList from "./AgentList/AgentList";

const Home = () => {
  return (
    <div>
      <Header />
      <BuySellRentHome />
      <Work />
      <Properties />
      <DreamHome />
      <AgentList />

      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
