import {DownOutlined} from "@ant-design/icons"

function ItemMenuUtama(props){
    return (
    
    <div className="flex"><li>{props.title}<span><DownOutlined className="text-xs ml-1"/></span></li></div>
    
    )
}

export default ItemMenuUtama;