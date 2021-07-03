import styles from "./Card.module.scss"

const Card = props => {
  return <div className={`${[styles.main].join(" ")} ${props.className}`}>
    {props.children}
  </div>;
}

export default Card;
