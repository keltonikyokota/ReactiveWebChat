import { List } from "antd";
import { useSelector } from "react-redux";
import styles from "./UserList.module.css";
import UserItem from "../UserItem/UserItem";

const UserList = () => {
    const users = useSelector(state => state.usersReducer.entities);

    return (
        <div className={styles.listWrapper}>
        <List
            className={styles.list}
            itemLayout="horizontal"
            dataSource={Object.values(users)}
            renderItem={(user) => (
                <UserItem {...user}/>
            )}
        />
        </div>
    );
}
 
export default UserList;