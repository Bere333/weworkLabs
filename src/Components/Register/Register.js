
import React, { Component } from 'react';
import './Register.css';
// import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import './Register.css';
import { Input } from '@material-ui/core';
import TransitionsModal from '../Modal/Modal'
 import { Button } from '@material-ui/core';




class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:"",
          mail:"",
          anfitrion:""
          
          
        };
      }
      
    onClick = (e) =>{
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify(this.state.name));
    // localStorage.setItem("orden", JSON.stringify(this.state.value));
    // history.push(this.props.ruta);
      
      const currentDate = new Date();
      const db = firebase.firestore();
      const strDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
      const strHour=`${currentDate.getHours()}-${currentDate.getMinutes()} hrs`
      
        db.collection('visitas').add({
            // email: localStorage.getItem('email'),
            // name:localStorage.getItem('comment'),
            name:this.state.name,
        //     pedidos:"Pandemonium",
            date: strDate,
            dateHour: strHour,
            mail:this.state.mail,
            anfitrion:this.state.anfitrion,
            type:"discapacidad"
        // name:localStorage.getItem('name'),
        // num:localStorage.getItem('num'),
        // table:localStorage.getItem('num-mesa'),
        // type:typevalue,
        // option:optionvalue,
        // quantity:quantityvalue,
        // completeArray:localStorage.getItem('orden')
      })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            this.setState({valid:true})
            
            
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        }
        )    
        
    }  
    onChange = e => {
        this.setState({
            name: e.target.value,
            
        });
        
       // localStorage.setItem("name", JSON.stringify(this.state.name));
        // localStorage.setItem("email", JSON.stringify(this.state.email));

      };

    AddEmail = e => {
      this.setState({
        mail: e.target.value
    });
    }

    AddAnfitrion = e => {
      this.setState({
        anfitrion: e.target.value
    });
    }

    render() {
    
        return (
          
                <section className="section-register">
                <div className="register-tittle">
                   <label>Registra tu entrada</label>
                </div>
                <div class="register-container">
                    <Input type="text"  placeholder="Nombre completo"  onChange={this.onChange}/>
                    <Input type="text"  placeholder="Correo electrónico"  onChange={this.AddEmail} />
                    <Input type="text"  placeholder="Persona/empresa a la que visita"  onChange={this.AddAnfitrion}/>
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
                      <Button variant="contained" onClick={this.onClick}>Entrada</Button>
                    </div>
 
 
            </section>
 
        )}}
        

 export default Register;

