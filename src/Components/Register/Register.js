import React, { Component } from 'react';
import './Register.css';
// import { input } from '@material-ui/core';
import TransitionsModal from '../Modal/Modal'
import { Button } from '@material-ui/core';


class Register extends Component {
    render(){
       return (
           <section className="section-register">
               <div className="register-tittle">
                  <label>¿Quién te visita?</label>
               </div>
               <div class="register-container">
                   <label for="">Nombre Completo</label>
                   <input type="text" name="name" placeholder="Nombre completo"/>
                   <label for="">Dirección de correo</label>
                   <input type="text" name="name"/>
                   <label for="">Fecha de la visita</label>
                   <input type="date" value=""/>
                   <label for="">Hora de la visita</label>
                   <input type="time"/>
               </div>
               <div className="needs">
                 <input type='radio' className="chk"/>
                   <p class="txt-needs">¿Tienes alguna discapacidad o requieres asistencia?</p>
               </div>
                   <div className="sig">
                     <Button variant="contained">Siguiente</Button>
                   </div>


           </section>



       )

    }

    
}
export default Register;