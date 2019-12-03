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
                  <label>REGISTRA TU ENTRADA</label>
               </div>
               <div class="register-container">
                   <input type="text" name="name" placeholder="Nombre completo"/>
                   <input type="text" name="name" placeholder="Correo electrónico"/>
                   <input type="text" name="name" placeholder="Persona/empresa a la que visita"/>
               </div>
               <div className="needs">
                 <input type='radio' className="chk"/>
                   <p class="txt-needs">¿Tienes alguna discapacidad o requieres asistencia?</p>
               </div>
               <div className="warn">
                   <p class="txt-warn">Al continuar con tu registro, aceptas nuestra política de privacidad</p>
               </div>
                   <div className="privacity">
                     <TransitionsModal/>
                   </div>
                   <div className="sig">
                     <Button variant="contained">Siguiente</Button>
                   </div>


           </section>



       )

    }

    
}
export default Register;