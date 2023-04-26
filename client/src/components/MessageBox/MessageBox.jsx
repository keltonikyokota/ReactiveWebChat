import Message from "../Message/Message";
import styles from "./MessageBox.module.css"
import { useSelector } from "react-redux";

const MessageBox = () => {
    const messages = useSelector(state => state.messagesReducer);
    return (
        <ul className={styles.messageBox}>
            {messages.map(message => <Message key={message.id} {...message}>{message.text}</Message> )}
        </ul>
    );
}
 
export default MessageBox;