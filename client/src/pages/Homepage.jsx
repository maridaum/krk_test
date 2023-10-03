import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Homepage";
import kino from "../assets/images/kino3.png";

const Homepage = () => {
  return (
    <Wrapper>
      <div className="hero">
        <div className="message-container">
          <h1 className="message">Elevate Your Dog's Nutrition</h1>
          <p>Get started by using our free raw feeding calculator!</p>
          <Link to="/calculator" className="hero-btn btn">
            Calculate Your Dog's Meal Plan
          </Link>
        </div>
        <img src={kino} alt="black dog"></img>
      </div>
    </Wrapper>
  );
};

export default Homepage;
