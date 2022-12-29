import React, { useRef, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Success = () => {
  const [showElement, setShowElement] = useState(true);

  const handleClick = () => {
    setShowElement(false);
  };
  
  return (
    showElement? <div className='popup' id='popup'>
      <img src={images.checked} alt="success check" />
      <h2>Takk</h2>
      <p>Din melding er sendt. Vi kommer tilbake til deg så fort som mulig</p>
      <button onClick={handleClick}>OK</button>
    </div>: null
  )
}


const Footer = () => {

  const form = useRef();
  const [result, showResult] = useState(false);

  const { errors, touched, handleBlur, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '', 
      email: '', 
      message: '' 
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email("not a valid email").required("not a valid email"),
      message: Yup.string().min(10).required("message to short, min 10 characters")
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
      }, 10000);
   },
});

  return (
    <>
      <h2 className="head-text">Have a coffee & chat with me</h2>

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

      <form ref={form} onSubmit={handleSubmit} className="app__footer-form app__flex">
        <input 
          placeholder='Name' 
          type="text" 
          name="name" 
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input-error" : ""}
          onChange={handleChange}
         	value={values.name}
          />
          {errors.name && touched.name && <p className='error-message'>{errors.name}</p>}
          
          <input 
          placeholder='Email' 
          type="email" 
          name="email"
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
          onChange={handleChange}
          value={values.email}
          />
          {errors.email && touched.email && <p className='error-message'>{errors.email}</p>}

          <textarea 
          placeholder='Message' 
          name="message"
          onBlur={handleBlur}
          className={errors.message && touched.message ? "input-error" : ""}
          onChange={handleChange}
          value={values.message}
          />
          {errors.message && touched.message && <p className='error-message'>{errors.message}</p>}
          
        <input type="submit" value="Send Message" className="button" />
      </form>
      {result ? <Success/> : null}

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
