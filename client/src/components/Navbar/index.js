import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import THlogo from '../../assets/images/TH-Logo.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faFolderOpen, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => (
  <div className="nav-bar">
    <Link className="avatar" to="/">
      <img src={THlogo} alt="avatar" />
      <p>Nathan Milburn</p>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="my-work-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/nathan-milburn-55487513a/'>
                <FontAwesomeIcon icon={faLinkedin} color="#f5fffa" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.twitch.tv/thrillhaus_nw'>
                <FontAwesomeIcon icon={faTwitch} color="#f5fffa" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCboIFdi_RdD7-IeMVuKDz2Q'>
                <FontAwesomeIcon icon={faYoutube} color="#f5fffa" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/NathanMilburn'>
                <FontAwesomeIcon icon={faGithub} color="#f5fffa" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://drive.google.com/file/d/1ZJW0qzgLeG-a8hhokidY_S3v5DiuZxtq/view?usp=sharing'>
                <FontAwesomeIcon icon={faIdCard} color="#f5fffa" />
            </a>
        </li>
    </ul>
  </div>
)

export default Navbar
