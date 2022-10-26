import { BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
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
);

export default SocialMedia;