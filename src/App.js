import './styles/App.css';
import React from 'react';
import {Calories} from './components/calories';
import {Macros} from './components/macros';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Workouts from './components/workouts';

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
       <Route path='/' element={<home></home>}></Route>
       <Route path='/workouts' element={<Workouts></Workouts>}></Route>
       <Route path='/calories' element={<Calories></Calories>}></Route>
       <Route path='/macros' element={<Macros></Macros>}></Route>
      </Routes>
    </Router>

  );
}
}

export default App;
