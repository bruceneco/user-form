import ReactDOM from "react-dom";

import styles from "./Modal.module.scss";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Backdrop = ({onClose}) => {
  return <div className={styles.main} onClick={onClose}/>;
};
const ModalOverlay = ({title, description, onClose}) => {
  return <Card className={styles.card}>
    <header className={styles.title}>
      <h2>{title}</h2>
    </header>
    <p>{description}</p>
    <footer className={styles.button}>
      <Button onClick={onClose}>Okay</Button>
    </footer>
  </Card>;
};
const Modal = ({onClose, title, description, open}) => {
  return open ? <>
    {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, document.getElementById("modal-backdrop"))}
    {ReactDOM.createPortal(<ModalOverlay onClose={onClose} title={title}
                                         description={description}/>, document.getElementById("modal-overlay"))}
  </> : null;
};

export default Modal;
