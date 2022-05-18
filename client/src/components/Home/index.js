import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import HeadShot from '../../assets/images/TH-3.PNG'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ','N', 'a', 't', 'h', 'a', 'n']
  const lastNameArray = ['M', 'i', 'l', 'b', 'u', 'r', 'n']

  useEffect(() => {
       setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={lastNameArray}
            idx={22}
          />
        </h1>
        <img src={HeadShot} alt="Professional Headshot" />
        <h2>Full-stack Developer / YouTuber / Competitive Gamer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
