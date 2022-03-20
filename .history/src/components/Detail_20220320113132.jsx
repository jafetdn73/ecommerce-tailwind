import Layout from "./Layout";
import {DownOutlined} from "@ant-design/icons";

function Detail(){
    return(
        <layout>
            {/* Show More Products */}
        <div className="flex justify-center relative">
          <button className="flex mt-16 py-1 pl-6 pr-8 rounded-lg font-bold border-2 border-lime-800 bg-lime-700 text-white">Show More Products<span><DownOutlined className="text-xs ml-1 absolute bottom-3"/></span></button>
        </div>  
            </layout>

    )
}

export default Detail;