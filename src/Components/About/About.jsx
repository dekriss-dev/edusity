import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 850,
            easing: 'ease',
        });
    }, []);
  return (
    <div className="about">
        <div data-aos="fade-up" data-aos-delay="0" className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3 data-aos="fade-up" data-aos-delay="0">ABOUT UNIVERSITY</h3>
            <h2 data-aos="fade-up" data-aos-delay="50">Nurturing Tomorrow&apos;s Leaders Today</h2>
            <p data-aos="fade-up" data-aos-delay="100">Embark on a transformative educational journey with our university&apos;s comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
            </p>
            <p data-aos="fade-up" data-aos-delay="150">With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
            </p>
        </div>
    </div>
  )
}

export default About