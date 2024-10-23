import './App.css'
import gisel from './assets/Geisel.jpg';

function App() {

  return (
    <>
      <h1>Jason Huang</h1>
      <h2>
      <a href={"mailto:contactjasonhuang@gmail.com"} className='link'>contactjasonhuang@gmail.com</a>
      <a href={"https://www.linkedin.com/in/contactjasonhuang/"} className='link'>Linkedin</a>
      <a href={"https://github.com/jasonhuan9"} className='link'>Github</a>
      </h2>
      <div>
        <h2>Pursing Computer Science at UC San Diego</h2> 
        <img src={gisel} alt="Gisel" />
      </div>
      <div>
      <h2>Coursework</h2>
      <ul className='left-allign'>
        <li>Basic Data Structures and Algorithms</li>
        <li>Discrete Mathematics</li>
        <li>Computer Organization and Systems Programming</li>
        <li>Advanced Data Structures</li>
        <li>Software Engineering</li>
      </ul>
      </div>
      <div>
        <h2>Technical Skills</h2>
        <h3>Languages</h3>
        <ul className='left-allign'>
            <li>Java</li>
            <li>C</li>
            <li>Assembly</li>
            <li>C++</li>
            <li>React</li>
            <li>Typescript</li>
        </ul>
        <h3>Developer Tools</h3>
        <ul className='left-allign'>
            <li>Git</li>
            <li>VS Code</li>
            <li>Vim</li>
        </ul>
      </div>
    </>
  )
}

export default App
