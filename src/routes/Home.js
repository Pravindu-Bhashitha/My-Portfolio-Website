import React from "react";
import Navbar from "../components/Navbar";
import Heroimage from "../components/Heroimage";
import Footer from "../components/Footer";
import Work from "../components/Work";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimage />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
