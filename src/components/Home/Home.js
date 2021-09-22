import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";

import Work from "./Work/Work";
import Properties from "./Properties/Properties";
import Testimonials from "./Testimonials/Testimonials";

import DreamHome from "./DreamHome/DreamHome";
import Footer from "./Footer/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <Work></Work>
      <Properties></Properties>
      <Testimonials></Testimonials>

      <DreamHome/>
      <Footer />

    </div>
  );
};

export default Home;
