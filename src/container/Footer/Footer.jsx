import React, { useRef, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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

  const formik = useFormik({
    initialValues: {
      name: '', 
      email: '', 
      message: '' 
    },
    validationSchema: Yup.object({
      name: Yup.string()
	    .required('Name is required'),
      email: Yup.string()
	    .required('Email is required'),
      message: Yup.string()
      .required('Message field is required')
    }),
    onSubmit: (values, {resetForm}) => {
      resetForm({ values: '' })
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
        showResult(true);

          // Hide success message after some time
        setTimeout(() => {
        showResult(false);
      }, 5000);
   },
});

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

      <form ref={form} onSubmit={formik.handleSubmit} className="app__footer-form app__flex">
        <input 
          placeholder='Name' 
          type="text" 
          name="name" 
          className="p-text"
          onChange={formik.handleChange}
         	value={formik.values.name}
          />
          	<div className={`error-text ${formik.touched.name && formik.errors.name ? 'show' : ''}`}>
                    {formik.errors.name}
            </div>
          
          <input 
          placeholder='Email' 
          type="email" 
          name="email" 
          className="p-text"
          onChange={formik.handleChange}
          value={formik.values.email}
          />
            <div className={`error-text ${formik.touched.email && formik.errors.email ? 'show' : ''}`}>
                    {formik.errors.email}
            </div>

          <textarea 
          placeholder='Message' 
          name="message" 
          className="p-text"
          onChange={formik.handleChange}
          value={formik.values.message}
          />
            <div className={`error-text ${formik.touched.message && formik.errors.message ? 'show' : ''}`}>
                    {formik.errors.message}
            </div>
          
        <input type="submit" value="Send Message" className="button" />
        <div>{result ? <Result/> : null}</div>
      </form>

      <div className="sosials">
        <div>
          <a href="https://www.linkedin.com/in/christian-larsen-99638a157/" rel="noreferrer" target="_blank">
          <FaLinkedinIn />
          </a>
        </div>

        <div>
        <a href="https://github.com/Christian-Skilar" rel="noreferrer" target="_blank">
        <BsGithub />
          </a>
        </div>

        <div>
        <a href="https://www.facebook.com/larsen3/" rel="noreferrer" target="_blank">
        <FaFacebookF />
          </a>
        </div>
      </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);