import { Fade, Slide } from "react-awesome-reveal";
import SectionTitle from "../../Shared/Sectiontitle/Sectiontitle";

const Extra2 = () => {
  return (
    
    <section>
      <SectionTitle heading={'What Is IELTS?'}></SectionTitle>
     
      
      <div className="mx-auto bg-slate-400 text-center">
      <div className="hero py-10 bg-base-200">
        <div className="hero-content flex-col ">
        <Slide>
          <img
            src="../../../../public/img/slide4.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          </Slide>
          <div>
          <Slide>
        <h1 className="text-5xl font-bold ">What Is IELTS?</h1>
      </Slide>
      <Fade delay={500} cascade damping={0.1}>
      <p className="text-sm">Internationally recognized English language proficiency test.</p>
      </Fade>
            
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Extra2;
