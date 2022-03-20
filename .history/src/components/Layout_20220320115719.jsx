// import ItemMenuUtama from "./Item_menu_utama";
// import {ShoppingOutlined} from "@ant-design/icons";
// import {UserOutlined} from "@ant-design/icons";
// import {SearchOutlined} from "@ant-design/icons";
import {DownOutlined} from "@ant-design/icons";

function Layout1(props){
// const Layout = (props) => {
    return (
            <div>
                <div className="flex justify-center relative">
          <button className="flex mt-16 py-1 pl-6 pr-8 rounded-lg font-bold border-2 border-lime-800 bg-lime-700 text-white">Show More Products<span><DownOutlined className="text-xs ml-1 absolute bottom-3"/></span></button>
        </div>  
                {props.children}
            </div>
    
    )
}

export default Layout1;