import React, { Component } from 'react';
import './Register.css';
import Button from '@material-ui/core/Button';


import Input from '../utils/Input'

class Register extends Component {

    render() {
        var style = {
            width:'15rem', 
            height:'4vh', 
            borderRadius:'10px', 
            textAlign:'center',
            marginTop:'2rem'
           }
        return (
            <section className="section-register">
                <Input
                    placeholder="Introduce tu nombre"
                    style={style}
                    
                />
                <Input
                    placeholder="¿a quién visitas?"
                    style={style}
                    
                />
                <label>¿eres discapacitado?</label>
                <button>Si</button><button>No</button>
                <button>Enviar respuesta</button>
                <Button variant="contained" color="primary">
      Hello World
    </Button>
        
            </section>
        )}}
        

 export default Register;