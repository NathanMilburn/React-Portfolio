import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import THImage5 from '../../assets/images/TH-5.PNG'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container contactMe-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '!']}
            idx={15}
          />
        </h1>
        <img src={THImage5} alt="Me at T-Mobile Park" />
            <p>Please feel free to contact me by phone or email:</p>
            <p>Email: <a href="mailto:nathan.milburn@outlook.com">nathan.milburn@outlook.com 📧 </a></p>
            <p>By Phone: (206)-940-7560</p>
      </div>
    </div>
  )
}

export default Contact
