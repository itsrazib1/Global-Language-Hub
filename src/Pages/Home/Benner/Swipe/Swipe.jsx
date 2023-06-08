import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import img1 from '../../../../../public/img/slide6.jpg'
import img2 from '../../../../../public/img/slide2.jpg'
import img3 from '../../../../../public/img/slide3.jpg'
import img4 from '../../../../../public/img/slide4.png'
import img5 from '../../../../../public/img/slide5.jpg'
import img6 from '../../../../../public/img/slide1.jpg'
import Sectiontitle from "../../../Shared/Sectiontitle/Sectiontitle";

const Swipe = () => {
    return (

        <div>
          <Sectiontitle heading={'Popular Classes Section'}></Sectiontitle>
          <div className="my-10">
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className="mx-auto h-60 m-5 " src={img1} alt="" />
        <h3 className="text-2xl text-black uppercase text-center -mt-20">writing-test</h3>
        </SwiperSlide>
        <SwiperSlide><img className="h-60 mx-auto m-5" src={img2} alt="" />
        <h3 className="text-3xl text-black uppercase text-center -mt-16">french</h3>
        </SwiperSlide>
        <SwiperSlide><img className="h-60 m-5  mx-auto  " src={img3} alt="" />
        <h3 className="text-2xl text-black uppercase text-center -mt-20">german</h3>
        </SwiperSlide>
        <SwiperSlide><img className="h-60 m-5 mx-auto " src={img4} alt="" />
        <h3 className="text-3xl text-black uppercase text-center -mt-16">ielts</h3>
        </SwiperSlide>
        <SwiperSlide><img className="h-60 m-5 mx-auto " src={img5} alt="" />
        <h3 className="text-2xl text-black uppercase text-center -mt-20">spain</h3>
        </SwiperSlide>
        <SwiperSlide><img className="h-60 m-5 mx-auto " src={img6} alt="" />
        <h3 className="text-3xl text-black uppercase text-center -mt-16">english</h3>
        </SwiperSlide>
        
      </Swiper>
        </div>
        </div>
    );
};

export default Swipe;