import React, { Component } from 'react';
import './Register.css';
// import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';


import Input from '../utils/Input'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value:''
          
        };
      }
      
    onClick = (e) =>{
    e.preventDefault();
    
    localStorage.setItem("orden", JSON.stringify(this.state.value));
    // history.push(this.props.ruta);
      
      const currentDate = new Date();
      const db = firebase.firestore();
      const strDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
      const strHour=`${currentDate.getHours()}-${currentDate.getMinutes()} hrs`
      
        db.collection('visitas').add({
            name:'Isis',
            correo:'isis@gmail.com',
        //     pedidos:"Pandemonium",
        date: strDate,
        dateHour: strHour,
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
                <button onClick={this.onClick}>Enviar respuesta</button>
                {/* <Button variant="contained" color="primary"> */}
     

    
        
            </section>
        )}}
        

 export default Register;