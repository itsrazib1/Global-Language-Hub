import { Slide } from "react-awesome-reveal";
import Sectiontitle from "../../Shared/Sectiontitle/Sectiontitle";

const Extra1 = () => {
    return (
      <div>
        <Sectiontitle heading={'Language learning is important ?'}></Sectiontitle>
        <div
          className="hero min-h-screen my-10"
          style={{ backgroundImage: "url(https://i.ibb.co/fpttZdv/flat-international-mother-language-day-illustration-23-2149219243.jpg)" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <Slide>
              <h1 className="mb-5 text-5xl font-bold">Language learning is important ?</h1>
              </Slide>
              <Slide>
              <p className="mb-5">
              Yes,Communication: Language is the primary tool of communication. Learning different languages allows you to communicate with people from diverse backgrounds, cultures, and countries. It helps break down barriers and fosters understanding between individuals and communities.
              </p>
              </Slide>
              
              <button className="btn btn-success">Go Classes</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Extra1;
  