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
import AppointmentFeature from "./AppointmentFeature/AppointmentFeature";
import AppointmentFeatureDetails from "./AppointmentFeatureDetails/AppointmentFeatureDetails";

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
      <AppointmentFeature></AppointmentFeature>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
