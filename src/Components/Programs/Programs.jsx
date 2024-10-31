import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Programs = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 850,
            easing: 'ease',
        });
    }, []);
  return (
      <div id='programs' className='programs'>
          <div data-aos="fade-up" data-aos-delay="0" className="program">
              <img src={program_3} alt=""/>
              <div className="caption">
                  <img src={program_icon_3} alt=""/>
                  <p>Lorem ipsum.</p>
              </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" className="program">
              <img src={program_1} alt=""/>
              <div className="caption">
                  <img src={program_icon_1} alt=""/>
                  <p>Lorem ipsum.</p>
              </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="program">
              <img src={program_2} alt=""/>
              <div className="caption">
                  <img src={program_icon_2} alt=""/>
                  <p>Lorem ipsum.</p>
              </div>
          </div>
      </div>
  )
}

export default Programs