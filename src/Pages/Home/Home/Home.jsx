import { Helmet } from "react-helmet";
import Benner from "../Benner/Benner";
import Swipe from "../Benner/Swipe/Swipe";
import Extra1 from "../Extra1/Extra1";
import Extra2 from "../Extra2/Extra2";
import Instructors from "../Instructors/Instructors";



const Home = () => {
    return (
        <div>
            <Helmet >
        <title>Global Language Hub|Home</title>
      </Helmet>
            <Benner></Benner>
            <Extra1></Extra1>
            <Swipe></Swipe>
            <Extra2></Extra2>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;