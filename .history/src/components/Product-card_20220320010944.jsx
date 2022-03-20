import NumberFormat from 'react-number-format';

function ProductCard(props){
    const item = props.item;
    return(
        <div className="w-70 h-fit p-4 bg-white border border-gray-400 rounded-lg">
                    <div className="flex relative">
                    <img src={'images/'+item.image} alt="bolu-susun" width="236" height="180"/>
                    <label className="text-lime-800 font-bold text-xs ml-2 absolute bottom-26 left-0 bg-white mt-2 mb-2 pl-1 pr-1 rounded-xl">- 36 %</label>
                    </div>
                  <div>
                  <h1 className="font-bold text-base mt-4 mb-2">{item.name}</h1>
                  <p className="text-sm">{item.description}</p>
                  </div>
                  <div className="flex justify-between mt-4">
                  <div className="flex flex-col">
                    <label className="font-bold text-xl">Rp. {item.originalPrice-item.originalPrice*item.discountPercent/100}</label>
                    {item.discountPercent>0 && (
                      <label className="line-through text-xs -mt-1">Rp. {item.originalPrice}</label>
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