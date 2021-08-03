import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import HeroSection from "../HeroSection";
import About from "../About";
import Marketing from "../Marketing";
import Comment from "../Comments";
import Blog from "../Blog";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeroSection />
      <About />
      <Marketing />
      <Comment />
      <Blog />
    </>
  );
};

export default Home;
