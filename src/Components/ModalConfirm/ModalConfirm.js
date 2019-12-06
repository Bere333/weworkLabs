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
    width: '100%',
    height: '10rem',
    fontSize: '10px',
    fontWeight: 'bold',
    display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '90%',
    height: '15rem',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    position: 'absolute',

    top: '20%',
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
        CONFIRMAR
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
            <section className="confirm-modal">
                    <div className="confirm-tittle">
                    <h2 id="modal-confirm-title">Agrega esta visita a tu calendario</h2>
                    </div>
                    <div className="links">
                   <Button className="btn-conf">iCalendar</Button>
                   <Button className="btn-conf">Calendario</Button>
                   <Button className="btn-conf">Google</Button>
                   </div>
                   <div className="btn-col">
                   <Link to="/confirm">
                   <Button onClick={handleClose}>Cerrar</Button>
                   </Link>
                   </div>
                    
            </section>   
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

