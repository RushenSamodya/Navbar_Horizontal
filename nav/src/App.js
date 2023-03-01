
import Navbar from './Navbar.js';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About.js';
import Courses from './Courses.js';
import Login from './Login.js';
import Signup from './Signup.js';
import StudentProfile from './StudentProfile.js';
import TopNav2 from './TopNav2.jsx';
import Sidebar from './Sidebar.jsx';

// import TopNav2 from './TopNav2.jsx';
//import Sidebar from './Sidebar.jsx';

function App() {
  return (
    <div className="App">
      
        {/* <TopNav2/>
        <Sidebar/> */}
        <TopNav2/>
        <Sidebar/>
          <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='courses' element ={<Courses/>}/>
            <Route path='StudentProfile' element ={<StudentProfile/>}/>
            <Route path='login' element ={<Login/>}/>
            <Route path='sign-up' element ={<Signup/>}/>

          </Routes>
       
    </div>
  );
}

export default App;
