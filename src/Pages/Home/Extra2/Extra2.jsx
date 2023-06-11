import { Fade, Slide } from "react-awesome-reveal";
import SectionTitle from "../../Shared/Sectiontitle/Sectiontitle";
import Img from '../../../../public/img/slide4.png'

const Extra2 = () => {
  return (
    
    <section>
      <SectionTitle heading={'What Is IELTS?'}></SectionTitle>
     
      
      <div className=" m-5 bg-slate-400 text-center">
      <div className="hero py-10 bg-base-200">
        <div className="hero-content flex-col ">
        <Slide>
          <img
            src={Img}
            className=" w-[95%] rounded-lg shadow-2xl"
          />
          </Slide>
          <div>
          <Slide>
        <h1 className="text-5xl font-bold ">What Is IELTS?</h1>
      </Slide>
      <Fade delay={500} cascade damping={0.1}>
      <p className="text-xs md:text-xl" >Internationally recognized English language proficiency test.</p>
      </Fade>
            
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Extra2;
