import { Row, Col } from "antd";
import LoginForm from "../components/LoginForm/LoginForm"
import { useSelector } from "react-redux";
import {Alert} from "antd";
import { Space } from "antd";

const LoginPage = () => {
    const error = useSelector(state => state.webSocketErrorReducer.error);
    return (
        <Row style={{height: "100%"}}>
            <Col style={{margin: "0 auto"}} xs={20} sm={18} md={12} lg={10}>
                {error
                    ?
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Alert
                            message="Oops... An error has occurred"
                            description={`Error text: "${error}". Try to reload the page.`}
                            type="error"
                            />
                    </Space>
                    :
                    <LoginForm />
                }
            </Col>
        </Row>
    );
}
 
export default LoginPage;