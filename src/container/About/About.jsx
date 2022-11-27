import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const abouts = [
  { title: 'Metaverse', description: 'Metaverse inspired page buildt with Next.js Tailwind and framer motion', linkName: 'View Page', link: 'https://metaversesupersite.netlify.app/', imgUrl: images.metaverse},
  { title: 'Modern Web Design', description: 'Modern Website made by using React.js and Tailwind. YT codealong', linkName: 'View Page', link: 'https://modern-website-style.netlify.app/', imgUrl: images.modern},
  { title: 'Dashboard', description: 'Admin dashboard in React.js Tailwind and Syncfusion', linkName: 'View Page', link: 'https://ultimate-dashboard-site.netlify.app/', imgUrl: images.dashboard},
  { title: 'Crypto Community', description: 'Crypto community with React, Sass and Framer Motion', linkName: 'View Page', link: 'https://wallofgains.netlify.app/', imgUrl: images.crypto},
  { title: 'Music Player', description: 'Music player made using the shazam API from RapidAPI', linkName: 'View Page', link: 'https://christify-music-player.netlify.app/', imgUrl: images.lyrics},
  { title: 'Coming Soon', description: 'Crypto currency page In Development, this one will be awesome...', linkName: 'In The Works', link: ' ', imgUrl: images.coming},
] 

const About = () => {

  return (
    <>
      <h2 className="head-text header-mg-top">Good Development -<br /> <span>Good Business</span></h2>

        <motion.div className="app__profiles">
        {abouts.map((about, index) => (

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__profile-item"
            key={about.title + index}
          >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
              <a href={about.link} rel="noreferrer" target="_blank" className="link-text">{about.linkName}</a>
          </motion.div>
        ))}
        </motion.div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);