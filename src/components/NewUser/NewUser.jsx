import styles from "./NewUser.module.scss";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {useState} from "react";

const NewUser = props => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");

  const usernameHandler = (event) => setUsername(event.target.value);
  const userAgeHandler = event => setUserAge(event.target.value);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddUser(username, userAge);
    setUserAge("");
    setUsername("");
  }
  return (<form onSubmit={onSubmitHandler}>
    <Card className={styles["new-user"]}>
      <label htmlFor="user-name">Username</label>
      <Input id="user-name" value={username} onChange={usernameHandler}/>
      <label htmlFor="user-age">Age (Years)</label>
      <Input id="user-age" type="number" value={userAge} onChange={userAgeHandler}/>
      <Button type="submit">Add User</Button>
    </Card>
  </form>);
};

export default NewUser;
