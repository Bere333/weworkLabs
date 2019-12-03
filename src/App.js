import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


// import Home from './Components/Home/Home';
import Welcome from './Components/Home/Home'
import ConfirmData from './Components/Confirm/Confirm';
import Visita from './Components/HomeVisita/HomeVisita';

import Register from './Components/Register/Register';
import * as firebase from 'firebase';





function App() {
  var firebaseConfig = { 
    apiKey: "AIzaSyAn3GbL2dZH4z-J4YHX0jlwZXK8YRbu8Bs",
    authDomain: "talent-fest-6406d.firebaseapp.com",
    databaseURL: "https://talent-fest-6406d.firebaseio.com",
    projectId: "talent-fest-6406d",
    storageBucket: "talent-fest-6406d.appspot.com",
    messagingSenderId: "626058194427",
    appId: "1:626058194427:web:64bd471648b84936f22f5e",
    measurementId: "G-YDZWYEP3P6"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebaseConfig);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route  exact path='/' component={Welcome} />
      <Route path='/register' component={Register} />
      <Route  path='/confirm' component={ConfirmData} />
      <Route path='/homeVisita' component={Visita} />


    
    </Router>
  );
}

export default App;
