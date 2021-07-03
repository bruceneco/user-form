import styles from "./Button.module.scss";

const Button = props => {
  return <button {...props} className={`${styles.main} ${props.className}`}><span>{props.children}</span></button>;
};

export default Button;
