import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.scss';

const container = {
  hidden: { opacity: 0 },

  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
      ease: "easeInOut",
    }
  }
}

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
        <nav className='app__navbar'>
            <ul className='app__navbar-links'>
                {['home', 'about', 'skills', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <AnimatePresence>
        {toggle && (
          <motion.div
            key="mobilemenu"
            variants={container}
            animate="show" 
            whileInView={{ x: [300, 0] }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            exit={{ x: [0, 400] }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'skills', 'contact'].map((item) => (
                <motion.li 
                  variants={container} 
                  initial="hidden"
                  animate="show"
                  key={item}>
                    <motion.a href={`#${item}`} onClick={() => setToggle(false)}>{item}</motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
        </nav>
    )
  }

export default Navbar;