import styles from "./UserEntry.module.scss"

const UserEntry = props => {
  return <div className={styles["user-entry"]}><span>{props.user.name} ({props.user.age} years old)</span></div>
}

export default UserEntry
