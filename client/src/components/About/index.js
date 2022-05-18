import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import THImage2 from '../../assets/images/TH-2.PNG'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="containter about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <img src={THImage2} alt="Me competing at EVO 2018" />
          <p>
            My name is Nathan Milburn and I am an ambitious software engineer
            and web developer. Since graduating from Western Washington
            University I have gained an interest in the rapidly growing coding
            industry and am looking to improve my skills through the University
            of Washington Coding Boot Camp.
          </p>
          <p>
            In my free time I enjoy playing video games like Halo Infinite,
            World of Warcraft, Counter-Strike: Global Offensive, and Super Smash
            Brothers Melee. The last of which I actually enjoy competing in
            local and national competitive tournaments.
          </p>
          <p>
            Some of the coding languages and systems I have learned include:
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>MySQL</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>React</li>
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
