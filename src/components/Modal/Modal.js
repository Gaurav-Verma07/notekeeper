import classes from "../Styles/Modal.module.scss";
const Modal = (props) => {
  return (
    <div className={classes["modal"]} onClick={props.closeCart}>
      {props.children}
    </div>
  );
};
export default Modal;