import {DownOutlined} from "@ant-design/icons"

function ItemMenuUtama(props){
    return (
    
    <div className="flex"><li>{props.title}<span><DownOutlined className="ml-1 mt-2 w-3 h-2"/></span></li></div>
    
    )
}

export default ItemMenuUtama;