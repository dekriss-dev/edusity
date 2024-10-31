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
            <h3 data-aos="fade-up" data-aos-delay="0">O UNIWERSYTECIE</h3>
            <h2 data-aos="fade-up" data-aos-delay="50">Zastanawiasz się nad wyborem?</h2>
            <p data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci architecto assumenda at autem blanditiis commodi consequuntur cumque cupiditate deserunt dolore doloremque error eum, hic ipsum, iste modi necessitatibus omnis possimus quod ratione saepe sed soluta tempore veniam. Accusamus culpa dolorem doloremque ea ex maiores quasi quidem veniam voluptas voluptatem?</p>
            <p data-aos="fade-up" data-aos-delay="150">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur cupiditate ea in laudantium modi praesentium. Ab architecto consequuntur cupiditate, debitis, deserunt, dignissimos harum inventore mollitia nihil omnis possimus quo sunt voluptatibus. Accusantium architecto beatae excepturi facere fugiat harum hic iusto laboriosam nisi optio, perspiciatis quaerat, quisquam sint ullam voluptatem!</p>
            <p data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eum eveniet id omnis quis. Aliquam aperiam, architecto cum dicta dolores doloribus fugiat in iste libero modi mollitia, nemo nihil placeat quas quibusdam quis sed sequi sint vero voluptate? Aliquid asperiores at ducimus ea esse fugiat incidunt magnam magni possimus ullam!</p>
        </div>
    </div>
  )
}

export default About