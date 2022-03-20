import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';

function ProductCard(props){
    const item = props.item;
    var discountPrice=item.originalPrice-item.originalPrice*item.discountPercent/100;
    return(
        <div className="w-64 h-fit p-4 bg-white border border-gray-400 rounded-lg">
                    <div className="flex relative">
                    <img src={'images/'+item.image} alt="bolu-susun" width="236" height="180"/>
                    <label className="text-lime-800 font-bold text-xs ml-2 absolute bottom-26 left-0 bg-white mt-2 mb-2 pl-1 pr-1 rounded-xl">- 36 %</label>
                    </div>
                  <div>
                  <Link to={item.name}>
                    <h1 className="font-bold text-base mt-4 mb-2">{item.name}</h1>
                  </Link>
                  <p className="text-sm">{item.description}</p>
                  </div>
                  
                  <div className="flex justify-between mt-4">
                   <div className="w-28 flex flex-col">
                     <div>
                      <label><NumberFormat class="w-28 font-bold text-xl" thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} value={discountPrice} displayType={'text'}/></label>
                    </div>
                    {item.discountPercent>0 && (
                      <label><NumberFormat class="line-through text-xs -mt-1" thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} value={item.originalPrice} displayType={'text'}/></label>
                     )}
                   </div>

                  <div>
                   <button className="py-1 px-3 rounded-lg font-bold border-2 border-lime-800 bg-lime-700 text-white">Buy Now</button>
                  </div>
                 </div>

            </div>
    )
}

export default ProductCard;