import DownOutlined from "@ant-design/icons"

function ItemMenuUtama(props){
    return (
    
    <div className="flex"><li>{props.title}</li><img className="ml-1 mt-2 w-3 h-2" src="/images/dropdown-icon.png" alt="user"/><DownOutlined /></div>
    
    )
}

export default ItemMenuUtama;