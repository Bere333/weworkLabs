import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import Register from './Components/Register/Register'



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path='/' component={Register} />
      <Route  path='/home' component={Home} />

    
    </Router>
  );
}

export default App;
