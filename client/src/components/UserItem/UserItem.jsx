import { List } from "antd";
import {Avatar} from "antd";
import styles from "./UserItem.module.css";
import formatDate from "../../helpers/formatDate";

const UserItem = ({name, id}) => {
    const userUpTime = formatDate(new Date(id));
    return (
        <List.Item className={styles.listItem}>
            <List.Item.Meta
                avatar={<Avatar>{name[0]}</Avatar>}
                title={name}
                description={`In chat since: ${userUpTime}`}
            />
        </List.Item>
    );
}
 
export default UserItem;