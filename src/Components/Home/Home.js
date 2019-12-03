import React, { Component } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import TransitionsModal from '../Modal/Modal';
// import Select from '../utils/Select'
import Register from '../Register/Register';
import { Link } from 'react-router-dom';

class Welcome extends Component {

    render() {
        return (
            <section className="section-welcome">
                <div className="welcome-tittle">
                   <label>Wework Labs App</label>
                   <select class="custom-select">
                       <option>Idioma</option>
                       <option>Español</option>
                       <option>English</option>
                   </select>
                </div>
                <div className="welcome-btn">
                   <div className="btn-col1">
                   <Link to="/register">
                   <Button variant="contained" onClick={Register}>Agendar visita</Button>
                   </Link>
                   </div>
                </div>
                <div className="privacity">
                     <TransitionsModal/>
                   </div> 
            </section> 
        )}}
        

 export default Welcome;