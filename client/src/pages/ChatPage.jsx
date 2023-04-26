import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import CustomSider from "../components/CustomSider/CustomSider";
import ChatBox from "../components/ChatBox/ChatBox";
import { useEffect } from "react";
import { loadUsers } from "../store/serverActions";
import { useDispatch } from "react-redux";


const ChatPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsers());
    });
    return (
        <Layout style={{height: "100%"}}>
            <CustomSider />
            <Content>
                <ChatBox />
            </Content>
        </Layout>
    );
}
 
export default ChatPage;