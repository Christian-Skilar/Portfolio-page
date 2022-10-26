import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';



const Result = () => {
  return (
    <div className='success-message'>
      <p>Message is sent</p>
      <img src={images.check} alt="success check" />
    </div>
  )
}

const Footer = () => {

  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_re4pbq9', 
      'template_7kt7iq8', 
      form.current, 
      'fhMC_ZVTG0ctP8k6q'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sendt")
      }, 
      (error) => {
          console.log(error.text);
      }
      );
      e.target.reset();
      showResult(true);
  };

  // Hide success message after some time
  setTimeout(() => {
    showResult(false);
  }, 10000);

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:cskilbredl.1993@gmail.com" className="p-text">cskilbredl.1993@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <p className="p-text">+47 47 67 09 57</p>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
        <input 
          placeholder='Name' 
          type="text" 
          name="name" 
          className="p-text"
          />
          
          <input 
          placeholder='Email' 
          type="email" 
          name="email" 
          className="p-text"
          />

          <textarea 
          placeholder='Message' 
          name="message" 
          className="p-text"
          />
          
        <input type="submit" value="Send Message" className="button" />
        <div>{result ? <Result/> : null}</div>
      </form>

    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);