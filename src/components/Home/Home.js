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

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Work />
      <Properties />
      <DreamHome />
      <Testimonials />
      <Contact />
      <Footer />
      <Agents />
    </div>
  );
};

export default Home;
