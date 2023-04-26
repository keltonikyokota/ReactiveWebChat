import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router";
import CustomHeader from "../CustomHeader";

import styles from "./MainLayout.module.css";


const MainLayout = () => {
    return (
        <Layout>
            <CustomHeader />
            <Content className={styles.content}>
                <Outlet />
            </Content>
        </Layout>
    );
}
 
export default MainLayout;