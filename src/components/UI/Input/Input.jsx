import styles from "./Input.module.scss"

const Input = props => {
  return <input type="text" {...props} className={`${styles.main} ${props.className}`} />
}

export default Input;
