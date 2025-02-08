import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title-text">
        <div className="home-center-text">
          <h1 className="big-text">hey! i'm prince</h1>
          <p className="small-text">
            a software engineer with a passion for solving problems and killing
            bugs
          </p>
        </div>
      </div>
      <div className="button-container">
        <Link to="/about">
          <button>•about me•</button>
        </Link>
        <Link to="/blog">
          <button>•blog•</button>
        </Link>
        <Link to="/contact">
          <button>•contact•</button>
        </Link>
        <div className="bottom-right-button">
          <button>🌙</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
