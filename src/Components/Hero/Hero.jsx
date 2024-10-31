import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import {Link} from 'react-scroll'
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
            <h1 data-aos="fade-up" data-aos-delay="0">Zadbamy o twoją lepszą edukację!</h1>
            <p data-aos="fade-up" data-aos-delay="50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi cupiditate earum et eum facilis ipsa iure, magnam maiores nemo officia quis suscipit.</p>
            <Link
                to='program'
                smooth={true}
                offset={-260}
                duration={500}
            >
              <button data-aos="fade-up" data-aos-delay="100" className='btn'>Zobacz więcej <img src={dark_arrow} alt="Arrow" /></button>
            </Link>
            
        </div>
    </div>
  )
}

export default Hero