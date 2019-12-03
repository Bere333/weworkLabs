import React, { Component } from 'react';
// import './Confirm.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ConfirmModal from '../ModalConfirm/ModalConfirm';
import '../ModalConfirm/ModalConfirm.css'

class ConfirmData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:"",
          mail:"",
          hour:"", 
          date:"",
          discapacidad:"No",
          clave:""
          
          
        };
      }

    componentWillMount = () => {
        const db = firebase.firestore(); 
         const pedidosRef = db.collection('visitas');   
         pedidosRef.where('clave', '==', 'sVDr' )   
         .get()    
        .then((onSnapshot) => {  
          
            
             onSnapshot.forEach((doc) => {    
                this.setState({name:doc.data().filter})
            })                 
           
        })
    }
    render() {
        return (
            <section className="section-confirm">
                <div className="confirm-tittle">
                   <label>Confirma tus datos</label>
                   <div className="box-print">

                   </div>
                </div>
                <div className="confirm-cont">
                    <label>Nombre</label>
                    <p>Aquí va el dato nombre</p>
                    <label>Correo</label>
                    <p>Aquí va el dato correo</p>
                    <label>Fecha</label>
                    <p>Aquí va el dato fecha</p>
                    <label>Hora</label>
                    <p>Aquí va el dato hora</p>
                </div>
                <div className="confirm-btn">
                   <div className="btn-col1">
                   <Link to="/">
                   <Button variant="contained">Confirmar</Button>
                   </Link>
                   </div>
                   <div className="privacity">
                     <ConfirmModal/>
                   </div> 
                </div>
               
            </section> 
        )}}
        

 export default ConfirmData;