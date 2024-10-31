import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimonials = () => {

	useEffect(() => {
		AOS.init({
			once: false,
			duration: 850,
			easing: 'ease',
		});
	}, []);

    const slider = useRef();
    let tx = 0

    const slideForward = () => {
        if(tx > -50){
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

	return (
		<div className='testimonials'>
			<img
				data-aos="fade-up"
				data-aos-delay="0"
				src={next_icon}
				alt=''
				className='next-btn'
				onClick={slideForward}
			/>
			<img
				data-aos="fade-up"
				data-aos-delay="50"
				src={back_icon}
				alt=''
				className='back-btn'
				onClick={slideBackward}
			/>
			<div className='slider'>
				<ul ref={slider}>
					<li>
						<div data-aos="fade-up"
							 data-aos-delay="150" className='slide'>
							<div className='user-info'>
								<img
									src={user_1}
									alt='User 1'
								/>
								<div>
									<h3>William Jackson 1</h3>
									<span>Edusity, USA</span>
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. At earum quod, ducimus sapiente quas, corrupti voluptates fuga minima
								repellat nostrum, ut hic atque saepe dignissimos laboriosam dolorem tempora odit? Quis asperiores numquam ducimus dolores explicabo
								doloremque et, amet vero earum facilis quasi voluptatum quidem ipsum. Nulla similique illo nobis suscipit?
							</p>
						</div>
					</li>
					<li>
						<div data-aos="fade-up"
							 data-aos-delay="250" className='slide'>
							<div className='user-info'>
								<img
									src={user_2}
									alt='User 2'
								/>
								<div>
									<h3>William Jackson 2</h3>
									<span>Edusity, USA</span>
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. At earum quod, ducimus sapiente quas, corrupti voluptates fuga minima
								repellat nostrum, ut hic atque saepe dignissimos laboriosam dolorem tempora odit? Quis asperiores numquam ducimus dolores explicabo
								doloremque et, amet vero earum facilis quasi voluptatum quidem ipsum. Nulla similique illo nobis suscipit?
							</p>
						</div>
					</li>
					<li>
						<div className='slide'>
							<div className='user-info'>
								<img
									src={user_3}
									alt='User 3'
								/>
								<div>
									<h3>William Jackson 3</h3>
									<span>Edusity, USA</span>
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. At earum quod, ducimus sapiente quas, corrupti voluptates fuga minima
								repellat nostrum, ut hic atque saepe dignissimos laboriosam dolorem tempora odit? Quis asperiores numquam ducimus dolores explicabo
								doloremque et, amet vero earum facilis quasi voluptatum quidem ipsum. Nulla similique illo nobis suscipit?
							</p>
						</div>
					</li>
					<li>
						<div className='slide'>
							<div className='user-info'>
								<img
									src={user_4}
									alt='User 4'
								/>
								<div>
									<h3>William Jackson 4</h3>
									<span>Edusity, USA</span>
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. At earum quod, ducimus sapiente quas, corrupti voluptates fuga minima
								repellat nostrum, ut hic atque saepe dignissimos laboriosam dolorem tempora odit? Quis asperiores numquam ducimus dolores explicabo
								doloremque et, amet vero earum facilis quasi voluptatum quidem ipsum. Nulla similique illo nobis suscipit?
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Testimonials
