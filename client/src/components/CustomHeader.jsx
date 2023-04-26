import { Header } from "antd/es/layout/layout";
import { useSelector } from "react-redux";
import CustomMenu from "./CustomMenu/CustomMenu";


const CustomHeader = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth);

    return (
        <Header style={{padding: "0 10px"}} >
            {isAuth &&
                <CustomMenu />
            }
        </Header>
    );
}
 
export default CustomHeader;