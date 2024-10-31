import './Title.css'
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Title = ({subTitle, title}) => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 850,
            easing: 'ease',
        });
    }, []);
  return (
    <div className='title'>
        <p data-aos="fade-up" data-aos-delay="0">{subTitle}</p>
        <h2 data-aos="fade-up" data-aos-delay="50">{title}</h2>
    </div>
  )
}

export default Title