import './styles/App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

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
       <Route path='/workouts' element={<workouts></workouts>}></Route>
       <Route path='/calories' element={<calories></calories>}></Route>
       <Route path='/macros' element={<macros></macros>}></Route>
      </Routes>
    </Router>

  );
}
}

export default App;
