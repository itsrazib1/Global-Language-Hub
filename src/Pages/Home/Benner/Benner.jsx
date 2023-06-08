import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../public/img/french.jpg'
import img2 from '../../../../public/img/german.jpg'
import img3 from '../../../../public/img/ielts.jpg'
import img4 from '../../../../public/img/kids.jpg'
import img5 from '../../../../public/img/spain.jpg'
import img6 from '../../../../public/img/writing-test.jpg'
const Benner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
                <div>
                    <img src={img5} />
                    
                </div>
                <div>
                    <img src={img6} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Benner;