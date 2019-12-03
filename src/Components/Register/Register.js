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
                  <label>Registra tu entrada</label>
               </div>
               <div class="register-container">
                   <input type="text" name="name" placeholder="Nombre completo"/>
                   <input type="text" name="name" placeholder="Correo electrónico"/>
                   <input type="text" name="name" placeholder="Persona/empresa a la que visita"/>
               </div>
               <div className="needs">
               <label><input type='radio' name='Color' value='Red' /></label>
                   <p class="txt-needs">¿Tienes alguna discapacidad o requieres asistencia?</p>
               </div>
               <div className="warn">
                   <p class="txt-warn">Al continuar con tu registro, aceptas nuestra política de privacidad</p>
               </div>
                   <div className="privacity">
                     <TransitionsModal/>
                   </div>
                   <div className="sig">
                     <Button variant="contained">Entrada</Button>
                   </div>


           </section>



       )

    }

    
}
export default Register;