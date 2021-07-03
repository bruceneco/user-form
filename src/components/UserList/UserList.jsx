import styles from "./UserList.module.scss"
import Card from "../UI/Card/Card";
import UserEntry from "./UserEntry/UserEntry";

const UserList = props => {
  return <Card className={styles["user-list"]}>
    {props.users.map(user => <UserEntry key={`${user.name} ${user.age}`} user={user}/>)}
  </Card>
}

export default UserList;
