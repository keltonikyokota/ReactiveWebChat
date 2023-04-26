import { Menu } from "antd";
import { LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./CustomMenu.module.css"
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { LOGIN_PATH } from "../../routes"
import { toggleSidebar } from "../../store/sideBarReducer/sideBarSlice";


const CustomMenu = () => {
    const dispatch = useDispatch();

    const items = useMemo(() => [
        {
            label: <a href={LOGIN_PATH}>Выйти</a>,
            key: "logout",
            icon: <LogoutOutlined />
        },
        {
            key: "toggleSide",
            icon: <MenuOutlined onClick={() => dispatch(toggleSidebar())} style={{width: 20, height: 20}}/>
        }
    ], [dispatch]);

    return (
        <Menu className={styles.menu} mode="horizontal" theme="dark" selectable={false} items={items}/>
    );
}
 
export default CustomMenu;