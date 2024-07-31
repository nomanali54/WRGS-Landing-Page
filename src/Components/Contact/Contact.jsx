import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <>
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />noman.ali.545445@gmail.com</li>
                <li><img src={phone_icon} alt="" />+92 3488815915</li>
                <li><img src={location_icon} alt="" />Sangla Hill</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows={6} placeholder='Enter your message'></textarea>
                <button className='btn'>Submit now</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
