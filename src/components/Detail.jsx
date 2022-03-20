import { useParams } from "react-router-dom";
import Layout from "./Layout";
import ProductCard from "./Product-card";
import products from "../services/data/products";

function Detail(){
    const params =useParams();
    const item =products.filter(element => element.name===params.productName);
    return(
        <Layout>
            <div className="flex flex-wrap w-full p-6 gap-6" >
        <ProductCard item={item[0]}></ProductCard>
        </div>
        </Layout>

    )
}

export default Detail;