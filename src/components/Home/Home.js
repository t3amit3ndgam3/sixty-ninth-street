import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Work from "./Work/Work";
import Properties from "./Properties/Properties";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Work></Work>
      <Properties></Properties>
    </div>
  );
};

export default Home;
