import React, { Component } from 'react';
import './Confirm.css';
// import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';
import ConfirmModal from '../ModalConfirm/ModalConfirm';
import '../ModalConfirm/ModalConfirm.css'
import * as firebase from 'firebase';

class ConfirmData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:"",
          mail:"",
          hour:"", 
          date:"",
          discapacidad:"",
          clave:"",
          loading:true
          
          
        };
      }

    componentWillMount = () => {
        const db = firebase.firestore(); 
         const pedidosRef = db.collection('visitas');   
         pedidosRef.where('clave', '==', localStorage.getItem("clave", JSON.stringify(this.state.clave)) )   
         .get()    
        .then((onSnapshot) => {  
          
            
             onSnapshot.forEach((doc) => {    
                this.setState({name:doc.data().name})
                this.setState({mail:doc.data().mail})
                this.setState({hour:doc.data().dateHour})
                this.setState({date:doc.data().date})
                this.setState({hour:doc.data().hour})
                this.setState({loading:false})
            })                 
           
        }).catch(()=>{
            this.setState({name:`<i class="fas fa-spinner fa-pulse"></i>`})
                this.setState({mail:`<i class="fas fa-spinner fa-pulse"></i>`})
                this.setState({hour:`<i class="fas fa-spinner fa-pulse"></i>`})
                this.setState({date:`<i class="fas fa-spinner fa-pulse"></i>`})
                this.setState({hour:`<i class="fas fa-spinner fa-pulse"></i>`})
        })
    }
    render() {
        return (
            <section className="section-confirm">
                <div className="confirm-tittle">
                   <label>Pase de acceso</label>
                </div>
                <div className="confirm-cont">
                    <div className="inputs-confirm">
                    <i className="fas fa-spinner fa-pulse"></i>
                    <br></br>
                    <label className="title">Nombre:</label>
                    <p>{this.state.name} </p>
                    <label className="title">Correo:</label>
                    <p>{this.state.mail} </p>
                    <label className="title">Fecha:</label>
                     <p>{this.state.date} </p>
                    <label className="title">Hora:</label>
                     <p>{this.state.hour} </p>
                    <label className="title">Persona con discapacidad:</label>
                    <p>{this.state.discapacidad} </p>
                    <label className="title">Clave:</label>
                    <p>{localStorage.getItem("clave", JSON.stringify(this.state.clave))} </p>
                    </div>
                </div>
                <div className="confirm-send">
                    <p>Al confirmar se enviará un correo a tu visita con su código de acceso</p>
                </div>    
                   <div className="privacity">
                     <ConfirmModal/>
                   </div> 

               
            </section> 
        )}}
        

 export default ConfirmData;