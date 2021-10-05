import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Work from "./Work/Work";
import Properties from "./Properties/Properties";
import Testimonials from "./Testimonials/Testimonials";
import DreamHome from "./DreamHome/DreamHome";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Agents from "./Agents/Agents";
import BuySellRentHome from "./BuySellRentHome/BuySellRentHome";
import FeaturesCard from "./FeaturesCard/FeaturesCard";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BuySellRentHome/>
      <Work />
      <Properties />
      <DreamHome />
      <Agents />
      <Testimonials />
      <FeaturesCard></FeaturesCard>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
