import {DownOutlined} from "@ant-design/icons"

function ItemMenuUtama(props){
    return (
    
    <div className="flex"><li>{props.title}<ml-1 span><DownOutlined className="text-xs"/></span></li></div>
    
    )
}

export default ItemMenuUtama;