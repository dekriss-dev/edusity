import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 850,
            easing: 'ease',
        });
    }, []);
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1 data-aos="fade-up" data-aos-delay="0">We Ensure better education for a better world</h1>
            <p data-aos="fade-up" data-aos-delay="50">Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <Link
                to='program'
                smooth={true}
                offset={-260}
                duration={500}
            >
              <button data-aos="fade-up" data-aos-delay="100" className='btn'>Explore more <img src={dark_arrow} alt="Arrow" /></button>
            </Link>
            
        </div>
    </div>
  )
}

export default Hero