import React from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6kb3iwa', 'template_tkfsw6l', form.current, 'vrinexF6EZX6WCUU8')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    const [done, setDone] = useState(false);

  return (
    <div className='c-form' id='ContactForm'> 
        
        <div className="c-heading" style={{top:'3rem'}}>
            <span>Get in Touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1" style={{background:'skyBlue', top:'12rem', left: '5rem'}}></div>            
        </div>
        <div className="contact_form" style={{top:'3rem'}}>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="email" name='user_email' className='user' placeholder='Email'/>
                <textarea name='message' className='user' placeholder='Message'/>
                <input type="submit" className='button' value="Send"/>
                <span>{done && "Thanks for Contacting me!"}</span>
                <div className="blur c-blur1" style={{background:'var(--purple)'}}></div>            
            </form>
        </div>
    </div>
  )
}
