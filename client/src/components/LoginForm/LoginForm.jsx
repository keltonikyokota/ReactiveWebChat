import styles from "./LoginForm.module.css"
import { Form, Input, Button } from "antd";
import { useState, useRef, useEffect } from "react";
import { login } from "../../store/authReducer/authSlice";
import { useDispatch } from "react-redux";

const h2Content = "Добро пожаловать, друг!";

const LoginForm = () => {
    const titleRef = useRef(null);
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        for (let i = 1; i < h2Content.length; i++) {
            setTimeout(
                () => {if (titleRef.current) titleRef.current.innerHTML += h2Content[i]}
            , 100 * i);
        }
    }, []);

    const loginHandler = () => {
        if (username.trim())
            dispatch(login(username));
    }

    return (
        <div className={styles.formContainer}>
            <h2 ref={titleRef}>Д</h2>
            <Form
                autoComplete="off"
            >
                <Form.Item
                    label="Имя пользователя"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Item>

                <Form.Item>
                    <Button
                        onClick={loginHandler}
                        className={styles.buttonSubmit}
                        type="primary"
                        htmlType="submit"
                    >
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
 
export default LoginForm;