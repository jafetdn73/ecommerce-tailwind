import { useParams } from "react-router-dom";
import Layout from "./Layout";
import ProductCard from "./Product-card";

function Detail(){
    const params =useParams();
    return(
        <Layout>
        <ProductCard></ProductCard>
        </Layout>

    )
}

export default Detail;