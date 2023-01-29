
import Navbar from './Navbar.js';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Courses from './Courses.js';

function App() {
  return (
    <div className="App">
      
       <Navbar>
          <Routes>
            <Route path='Home' element ={<Home/>}/>
          </Routes>
       </Navbar>
       
    </div>
  );
}

export default App;
