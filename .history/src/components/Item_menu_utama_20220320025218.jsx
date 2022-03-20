import {DownOutlined} from "@ant-design/icons"

function ItemMenuUtama(props){
    return (
    
    <div className="flex relative"><li>{props.title}<span><DownOutlined className="text-xs ml-1 relative bottom-2"/></span></li></div>
    
    )
}

export default ItemMenuUtama;