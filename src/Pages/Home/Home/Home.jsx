import { Helmet } from "react-helmet";
import Benner from "../Benner/Benner";
import Swipe from "../Benner/Swipe/Swipe";
import Extra1 from "../Extra1/Extra1";
import Extra2 from "../Extra2/Extra2";
import Instructors from "../Instructors/Instructors";
import { useState } from "react";
import "./Home.css"; 

const Home = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`theme-${theme}`}>
      <Helmet>
        <title>Global Language Hub|Home</title>
      </Helmet>
      <Benner></Benner>
      <Extra1></Extra1>
      <Swipe></Swipe>
      <Extra2></Extra2>
      <Instructors></Instructors>
      <div className="text-center pb-4">

      <button className="btn btn-outline " onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default Home;
