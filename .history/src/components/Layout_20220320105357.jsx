import ItemMenuUtama from "./Item_menu_utama";
import {ShoppingOutlined} from "@ant-design/icons";
import {UserOutlined} from "@ant-design/icons";
import {SearchOutlined} from "@ant-design/icons";

function Layout(props){
// const Layout = (props) => {
    return (
            <div>
                <h1>LAYOUT</h1>
                {props.children}
            </div>
    
    )
}

export default Layout;