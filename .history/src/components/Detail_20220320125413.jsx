import { useParams } from "react-router-dom";
import Layout from "./Layout";
import ProductCard from "./Product-card";
import products from "../services/data/products";

function Detail(){
    const params =useParams();
    const item =products.filter(element => element.name===params.productName);
    return(
        <Layout>
        <ProductCard item={item[0]}></ProductCard>
        </Layout>

    )
}

export default Detail;