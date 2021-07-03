import styles from './App.module.scss';
import NewUser from "./components/NewUser/NewUser";
import {useState} from "react";
import Modal from "./components/Modal/Modal";
import UserList from "./components/UserList/UserList";


function App() {
  const [modal, setModal] = useState({show: false, title: "", description: ""});
  const [users, setUsers] = useState([]);
  const onAddUserHandler = (username, userAge) => {
    if (!userAge || !username) {
      setModal({
        show: true,
        title: "Invalid fields",
        description: "Fill all information fields."
      });
    } else if (userAge < 0) {
      setModal({
        show: true,
        title: "Invalid value",
        description: "Age shall be greater than 0."
      });
    } else {
      setUsers(prevUsers => [...prevUsers, {name: username, age: userAge}]);
    }
  };
  const showModalHandler = (modalData) => {
    setModal(prevModal => ({
      ...prevModal,
      show: modalData.show !== undefined ? modalData : !prevModal.show,
      ...modalData
    }));
  };
  return (
    <div className={styles.main}>
      <NewUser onAddUser={onAddUserHandler}/>
      {users.length > 0 && <UserList users={users}/>}
      <Modal open={modal.show} onClose={showModalHandler} title={modal.title}
                            description={modal.description}/>
    </div>
  );
}

export default App;
