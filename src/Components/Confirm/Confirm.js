import React, { Component } from 'react';
import './Confirm.css';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class ConfirmData extends Component {

    render() {
        // componentWillMount = () => {
        //     const db = firebase.firestore(); 
        //      const pedidosRef = db.collection('pedidos');   
        //      pedidosRef.where('pendiente', '==', true )   
        //      .get()    
        //     .then((onSnapshot) => {  

        //       let {table}=this.state;  
        //          onSnapshot.forEach((doc) => {    
        //          table.push(doc.data().table)
        //         this.setState({
        //           table:table
        //         })                 
        //        })
        //     })
        // }
        return (
            <section className="section-confirm">
                <div className="confirm-tittle">
                    <label>Confirma tus datos</label>
                    <div className="box-print">

                    </div>
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
        )
    }
}


export default ConfirmData;