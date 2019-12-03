import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './ModalConfirm.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    width: '90%',
    fontSize: '15px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function ConfirmModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="btn-modal"onClick={handleOpen}>
        Confirmar
      </button>
      <Modal
        aria-labelledby="modal-confirm-title"
        aria-describedby="transition-modal-confirm"
        className={classes.modal}
        id="style-modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="modal-confirm-title">Agrega esta visita a tu calendario</h2>
            <p id="transition-modal-confirm">
                <section className="confirm-container">
                    <div className="confirm-tittle">
                        <h1>Agrega esta visita a tu calendario</h1>
                    </div>
                    <div className="confirm-links">
                    <div className="sig">
                   <Button variant="contained">iCalendar</Button>
                   <Button variant="contained">Calendario</Button>
                   <Button variant="contained">Google</Button>
                   </div>
                    </div>
                    <div className="btn-col1">
                   <Link to="/homeAgenda">
                   <Button variant="contained" >Cerrar</Button>
                   </Link>
                   </div>
                </section>
            </p>
             
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

