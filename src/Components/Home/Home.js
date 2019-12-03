import React, { Component } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
// import TransitionsModal from '../Modal/Modal';
// import Select from '../utils/Select'

class Welcome extends Component {

    render() {
        return (
            <section className="section-welcome">
                <div className="welcome-tittle">
                   <label>Wework Labs App</label>
                   <select class="custom-select">
                       <option>Español</option>
                       <option>English</option>
                   </select>
                </div>
                <div className="welcome-btn">
                   <div className="btn-col1">
                   <Button variant="contained">Entrada</Button>
                   <Button variant="contained">Salida</Button>
                   </div> 
                   <div className="btn-col1">
                   <Button variant="contained">Pre-registro</Button>
                   <Button variant="contained">Entrega</Button>
                   </div>
                </div> 
            </section> 
        )}}
        

 export default Welcome;