import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_78nrfog', 'template_jtjglhn', form.current, 'HCAfAteWw1WcZ8cIU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>shanefranklin148@gmail.com</h5>
            <small>Available Anytime!</small><br/>
            <a href="https://mail.google.com/mail/?view=cm&to=shanefranklin148@gmail.com" target="_blank">Send Me An Email!</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>317-679-6378</h5>
            <small>Available: 9am - 5pm EST</small><br/>
            <a href="https://api.whatsapp.com/send?phone=3176796378" target="_blank">Send Me A Message On Whatsapp!</a>
          </article>
          <article className='contact__option'>
            <BsTelephone className='contact_option-icon'/>
            <h4>Phone</h4>
            <h5>317-679-6378</h5>
            <small>Available: 9am - 5pm EST</small>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message...</button>
        </form>
      </div>
    </section>
  )
}

export default Contact