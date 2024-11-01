import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 850,
            easing: 'ease',
        });
    }, []);
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Wysyłanie...");
        const formData = new FormData(event.target);

        formData.append("access_key", "5a02fc3f-38f3-4a03-9f40-73cb677303c4");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Wysłano wiadomość.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3 data-aos="fade-up" data-aos-delay="0">Wyślij nam wiadomość <img src={msg_icon} alt="" /></h3>
            <p data-aos="fade-up" data-aos-delay="50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem minus doloribus ratione magni illo? Deserunt, culpa. Repudiandae sequi beatae, doloribus dolores delectus quos, in aperiam inventore ullam non placeat deleniti natus quis ipsam excepturi fugiat laudantium maiores voluptatem. Ex, exercitationem odit alias ab dignissimos vero reprehenderit omnis maiores corrupti. Distinctio?</p>
            <ul>
                <li data-aos="fade-up" data-aos-delay="100"><img src={mail_icon} alt="" />contact@school.com</li>
                <li data-aos="fade-up" data-aos-delay="150"><img src={phone_icon} alt="" />+1 123-456-7890</li>
                <li data-aos="fade-up" data-aos-delay="200"><img src={location_icon} alt="" />Lorem ipsum dolor sit amet.<br/>Wrocław, Poland</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Imię</label>
                <input type='text' name='name' placeholder='Twoje imię' required/>
                <label>Numer telefonu</label>
                <input type='tel' name='phone' placeholder='Twój numer tel.' required/>
                <label>Wiadomość</label>
                <textarea name="message" rows='6' placeholder='Wpisz wiadomość' required></textarea>
                <button type='submit' className='btn dark-btn'>Wyślij teraz <img src={white_arrow} alt="" /></button>
            </form>
            <span data-aos="fade-up" data-aos-delay="0">{result}</span>
        </div>
    </div>
  )
}

export default Contact