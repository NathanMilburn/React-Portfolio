import './App.scss'
import { Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

// Work with useState to fix page reload issues
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        {/* Acts as header element for each page */}
        <br />
        <span className="tags top-tags">
          &lt;head&gt; <br />
          &lt;body&gt;
        </span>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <span className="tags bottom-tags">
          &lt;body&gt;
          <br />
          <span className="bottom-tag-html">
            &lt;footer&gt; <br /> &lt;/html&gt;
          </span>
        </span>
      </div>
    </div>
  )
}

export default App
