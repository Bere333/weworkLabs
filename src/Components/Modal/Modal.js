import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../Modal/Modal.css'

const useStyles = makeStyles(theme => ({
  modal: {
    width: '100%',
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

export default function TransitionsModal() {
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
        Aviso de Privacidad
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <h2 id="transition-modal-title">Aviso de privacidad</h2>
            <p id="transition-modal-description">

El presente aviso de privacidad se establece en cumplimiento de lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.

“NOMBRE DE LA EMPRESA O PERSONA FISICA”, con domicilio en ” AQUI SE COLOCA EL DOMICILIO COMPLETO”, México, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección. Su información personal será utilizada para proveer los servicios y productos que ha solicitado, informarle sobre cambios en los mismos y evaluar la calidad del servicio que le brindamos.

Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente; cuando visita nuestro sitio de Internet o utiliza nuestros servicios en línea, y cuando obtenemos información a través de otras fuentes que están permitidas por la ley. Recabamos sus datos personales de forma directa cuando usted mismo nos los proporciona por diversos medios, como cuando nos contacta o nos da información con objeto de que le prestemos un servicio. Los datos que obtenemos por este medio pueden ser, entre otros: Su nombre, correo electrónico (email), país y ciudad , páginas visitadas dentro de nuestro sitio, información para mejorar su experiencia en nuestro sitio como resolución de pantalla, explorador y tipo de sistema operativo utilizado. Usted tiene derecho de acceder, rectificar y cancelar sus datos personales, así como de oponerse al tratamiento de los mismos o revocar el consentimiento que para tal fin nos haya otorgado, a través de los procedimientos que hemos implementado.</p>
<button className="ok" onClick={handleClose}>Entendido</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}