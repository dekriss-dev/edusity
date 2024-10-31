import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Campus = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 850,
            easing: 'ease',
        });
    }, []);
  return (
    <div className='campus'>
        <div className="gallery">
            <img data-aos="fade-up" data-aos-delay="0" src={gallery_1} alt="Photo nr 1" />
            <img data-aos="fade-up" data-aos-delay="50" src={gallery_2} alt="Photo nr 2" />
            <img data-aos="fade-up" data-aos-delay="100" src={gallery_3} alt="Photo nr 3" />
            <img data-aos="fade-up" data-aos-delay="150" src={gallery_4} alt="Photo nr 4" />
        </div>
        <button data-aos="fade-up" data-aos-delay="200" className='btn dark-btn'>Zobacz więcej <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus