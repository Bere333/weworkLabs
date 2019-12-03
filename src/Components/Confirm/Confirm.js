import React, { Component } from 'react';
import './Confirm.css';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class ConfirmData extends Component {

    render() {
        return (
            <section className="section-confirm">
                <div className="confirm-tittle">
                   <label>Confirma tus datos</label>
                </div>
                <div className="confirm-btn">
                   <div className="btn-col1">
                   <Link to="/">
                   <Button variant="contained">Confirmar</Button>
                   </Link>
                   </div>
                   <div className="btn-col1">
                   <Link to="/register">
                   <Button variant="contained">Regresar</Button>
                   </Link>
                   </div>
                </div>
               
            </section> 
        )}}
        

 export default ConfirmData;