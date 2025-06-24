import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Button/Button";
import Banner from "../Banner/Banner";
import Services from "../../Section/Services";
import Navbar from "../Header/Header.jsx";
const Homepage = () => {
  let alertM = () => {
    alert();
  };
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Button
        text="Get started"
        className="get-started-btn"
        clickHandler={alertM}
      />
    </>
  );
};

export default Homepage;
