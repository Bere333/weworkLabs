import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// import Home from './Components/Home/Home';
import Welcome from './Components/Home/Home'
import Register from './Components/Register/Register'



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path='/register' component={Register} />
      <Route  path='/home' component={Welcome} />
      {/* <Route path='/search' component={Search} /> */}


    
    </Router>
  );
}

export default App;
