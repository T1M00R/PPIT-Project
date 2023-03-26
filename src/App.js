import './styles/App.css';
import React from 'react';
import {Calories} from './components/calories';
import {Macros} from './components/macros';
import {Login} from './components/login';
import {Signup} from './components/signup';
import {Home} from './components/home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Workouts} from './components/workouts';
import { Level } from './components/level';

class App extends React.Component {

  render() {
    return (
    <Router>

      {/* implementing navbar component */}
      <React.Fragment>
        <Navbar/>
      </React.Fragment>
      

      {/* using BrowserRouter to switch between components */}
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/workouts' element={<Workouts></Workouts>}></Route>
       <Route path='/level' element={<Level></Level>}></Route>
       <Route path='/calories' element={<Calories></Calories>}></Route>
       <Route path='/macros' element={<Macros></Macros>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </Router>

  );
}
}

export default App;
