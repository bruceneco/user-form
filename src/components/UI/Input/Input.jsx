import styles from "./TextInput.module.scss"

const TextInput = props => {
  return <input {...props} type="text" className={`${styles.main} ${props.className}`} />
}

export default TextInput;
