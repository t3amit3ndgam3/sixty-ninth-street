import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import DreamHome from "./DreamHome/DreamHome";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <DreamHome/>
      <Footer />
    </div>
  );
};

export default Home;
