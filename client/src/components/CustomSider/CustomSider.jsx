import Sider from "antd/es/layout/Sider";
import UserList from "../UserList/UserList";
import { useSelector } from "react-redux";
import styles from "./CustomSider.module.css"

const CustomSider = () => {
    const isOpened = useSelector(state => state.sideBarReducer.isOpened);

    return ( 
        <Sider
            className={styles.sider}
            collapsed={!isOpened}
            breakpoint="sm"
            collapsedWidth={0}
            trigger={null}
            width={300}
        >
            <UserList />
        </Sider>
    );
}
 
export default CustomSider;