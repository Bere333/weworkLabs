import React, { Component } from 'react';
import './Register.css';
// import { input } from '@material-ui/core';
import TransitionsModal from '../Modal/Modal';
import { Button } from '@material-ui/core';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';
import Welcome from '../Home/Home'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:"",
          mail:"",
          hour:"", 
          date:"",
          discapacidad:"No",
          clave:"sVDr"
          
          
        };
      }
      
    onClick = (e) =>{
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify(this.state.name));
    // localStorage.setItem("orden", JSON.stringify(this.state.value));
    // history.push(this.props.ruta);
      
      
      const db = firebase.firestore();
      
      
        db.collection('visitas').add({
            name:this.state.name,
            mail:this.state.mail,
            dateHour: this.state.hour,
            date: this.state.date,
           
            discapacidad:this.state.discapacidad,
            clave:this.state.clave,
        
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

   // AddAnfitrion = e => {
    //  this.setState({
     //   anfitrion: e.target.value
   // });
  //  }
    ChangeState = e => {
      this.setState({
        discapacidad:"Si"
      })
    }
    ChangeHour = e =>{
        this.setState({
            hour:e.target.value
        })
    }
    ChangeDate = e =>{
        this.setState({
            date:e.target.value
        })
    }
    addClave = (e) => {
      e.preventDefault();
      const arrayAscii = () => {
        let array =[]
        for(let i = 65; i<=90; i ++){
              array.push(i);
              
        }
        for(let j = 97; j<=122;j++){
             array.push(j);
        }
        return array;
     }
     
     const arrayNumber = arrayAscii();
    
     
    const password = (num) => {
          let string = [];
          for (let i = 1; i <= num; i++) {
                const randomNumber = Math.random()*51;
                const number = Math.floor(randomNumber);
                const letters = ()=>{
                     const string = String.fromCharCode(arrayNumber[number]);
                     return string;
                }
                string+=letters()
                
                
          }
          return string;
          
    }
    const pass = password(4)
    
    
    }
    

    render(){
       return (
           <section className="section-register">
               <div className="register-tittle">
                  <label>Detalles de la visita</label>
               </div>
               <div class="register-container">
                   <label for="">Nombre Completo</label>
                   <input type="text" name="name"
                   onChange={this.onChange}/>
                   <label for="">Dirección de correo</label>
                   <input type="text" name="name"
                   onChange={this.AddEmail}/>
                   <label for="">Fecha de la visita</label>
                   <input type="date" required onChange={this.ChangeDate }/>
                   <label for="">Hora de la visita</label>
                   <input type="time"  onChange={this.ChangeHour}
                   />
               </div>
               <div className="needs">
                 <input type='radio' className="chk"
                 onChange={this.ChangeState}/>
                   <p class="txt-needs">¿Tienes alguna discapacidad o requieres asistencia?</p>
               </div>
                   <div className="sig">
               <Link to="/confirm">
                     <Button variant="contained" onClick={this.onClick} onChange={this.addClave} >Siguiente</Button>
               </Link>
                   </div>
                   <div className="sig">
                   <Link to="/home">
                   <Button variant="contained" onClick={Welcome} >Regresar</Button>
                   </Link>
                   </div>
           </section>
       )

    }
}
export default Register;
