import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import React from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "5a02fc3f-38f3-4a03-9f40-73cb677303c4");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem minus doloribus ratione magni illo? Deserunt, culpa. Repudiandae sequi beatae, doloribus dolores delectus quos, in aperiam inventore ullam non placeat deleniti natus quis ipsam excepturi fugiat laudantium maiores voluptatem. Ex, exercitationem odit alias ab dignissimos vero reprehenderit omnis maiores corrupti. Distinctio?</p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@company.dev</li>
                <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
                <li><img src={location_icon} alt="" />Lorem ipsum dolor sit amet.<br/>United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type='tel' name='phone' placeholder='Enter your phone number' required/>
                <label>Your message</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact