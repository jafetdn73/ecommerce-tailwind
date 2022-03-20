import { useParams } from "react-router-dom";
import Layout from "./Layout";

function Detail(){
    const params =useParams();
    return(
        <Layout>
        <h1>{params.productName}</h1>
        </Layout>

    )
}

export default Detail;