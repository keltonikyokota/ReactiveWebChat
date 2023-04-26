import formatDate from "../../helpers/formatDate";
import styles from "./Message.module.css";
import { useSelector } from "react-redux";

const Message = ({date, author, children, isServer}) => {
    const isSelfUserMessage = useSelector(state => state.authReducer.userData.name) === author;
    return (
        isServer
        ?
        <li className={styles.serverMessageItem}>
            <div>
                {children}
            </div>
        </li>
        :
        <li className={isSelfUserMessage ? styles.selfMessageItem : styles.messageItem}>
            <div className={styles.messageAuthor}>{author}</div>
            <div className={styles.messageText}>
                {children}
            </div>
            <span className={styles.messageDate}>
                {formatDate(new Date(date))}
            </span>
        </li>
    )
}
 
export default Message;