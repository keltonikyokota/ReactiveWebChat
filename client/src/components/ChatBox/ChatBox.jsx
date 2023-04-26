import TextArea from "antd/es/input/TextArea";
import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import MessageBox from "../MessageBox/MessageBox";
import styles from "./ChatBox.module.css"
import { sendMessage } from "../../store/serverActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ChatBox = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const onChange = (e) => {
        setInput(e.target.value.trimStart());
    }

    const onSend = () => {
        if (input.length  < 1) return;
        dispatch(sendMessage(input));
        setInput("");
    }

    return (
        <div className={styles.wrapper}>
            <MessageBox />
            <div className={styles.controlsWrapper}>
                <TextArea
                    className={styles.textArea}
                    placeholder="Write a message..."
                    autoSize={{ minRows: 1, maxRows: 1 }}
                    bordered={false}
                    value={input}
                    onChange={onChange}
                    onPressEnter={onSend}
                />
                <Button onClick={onSend} className={styles.sendButton} type="primary" shape="circle">
                    <SendOutlined style={{marginLeft: 3}} />
                </Button>
            </div>
        </div>
    );
}
 
export default ChatBox;