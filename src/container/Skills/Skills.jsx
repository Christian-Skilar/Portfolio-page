import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const skills = [
  { name: 'React', icon: images.react},
  { name: 'SASS', icon: images.sass},
  { name: 'Figma', icon: images.figma},
  { name: 'HTML', icon: images.html},
  { name: 'API', icon: images.api},
  { name: 'css', icon: images.css},
  { name: 'Javascript', icon: images.javascript},
  { name: 'Tailwind', icon: images.tailwind},
  { name: 'Wordpress', icon: images.wordpress},
  { name: 'Divi', icon: images.divi},
] 

const Skills = () => {

  return (
    <>
      <h2 className="head-text">Skills & <span>Experience</span></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
              >
              <div className="app__flex" >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>

            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          <h4 className="bold-text">2021</h4>
          <p className="p-text">Done with study at Noroff.</p>
          <p className="p-text">Self study and online courses.</p>
          <br/>
          <h4 className="bold-text">2022</h4>
          <p className="p-text">Working freelance.</p>
          <p className="p-text">Self study and online/YouTube courses.</p>
          <p className="p-text">Growning intrest in Web 3.0.</p>
          <br/>
          <h4 className="bold-text">2023</h4>
          <p className="p-text">Plans for the future:</p>
          <p className="p-text">- Continue with the self study</p>
          <p className="p-text">- Dive deeper in Web 3.0</p>
          <p className="p-text">- Land a job were i can learn from</p>
          <p className="p-text">experienced developers</p>
        </div>
      </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg',
);