import React, { Component } from 'react';
import './Confirm.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ConfirmModal from '../ModalConfirm/ModalConfirm';
import '../ModalConfirm/ModalConfirm.css'
import * as firebase from 'firebase';

class ConfirmData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mail: "",
            hour: "",
            date: "",
            discapacidad: "No",
            clave: ""


        };
    }

    componentWillMount = () => {
        const db = firebase.firestore();
        const pedidosRef = db.collection('visitas');
        pedidosRef.where('clave', '==', 'sVDr')
            .get()
            .then((onSnapshot) => {


                onSnapshot.forEach((doc) => {
                    this.setState({ name: doc.data().name })
                    this.setState({ mail: doc.data().mail })
                    this.setState({ hour: doc.data().dateHour })
                    this.setState({ date: doc.data().date })
                    this.setState({ hour: doc.data().hour })
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
                    <label className="title">Nombre:</label>
                    <p>{this.state.name}</p>
                    <label className="title">Correo:</label>
                    <p>{this.state.mail}</p>
                    <label className="title">Fecha:</label>
                    <p>{this.state.date}</p>
                    <label className="title">Hora:</label>
                    <p>{this.state.hour}</p>
                    <label className="title">Persona con discapacidad:</label>
                    <p>{this.state.discapacidad}</p>
                </div>
                <div className="confirm-btn">
                    <div className="btn-col1">
                        <Link to="/">
                            <Button variant="contained">Confirmar</Button>
                        </Link>
                    </div>
                    <div className="privacity">
                        <ConfirmModal />
                    </div>
                </div>

            </section>
        )
    }
}


export default ConfirmData;