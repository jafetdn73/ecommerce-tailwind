function Home(){
    return(
        <div>
                  {/* Container Wrapper */}
      <div className="flex gap-4">
        {/* Side Bar Container */}
        <div className="flex flex-col w-96" >
          {/* Categories Container */}
          <div className="flex flex-col mt-10">
            <h1 className="font-bold text-base mb-2">Categories</h1>
            <ul>
              <div className="flex justify-between">
                <li>Bolu</li><label className="mb-2 bg-gray-200 pl-2 pr-2 rounded-xl">320</label>
              </div>
              <div className="flex justify-between">
                <li>Mie</li><label className="mb-2 bg-gray-200 pl-2 pr-2 rounded-xl">112</label>
              </div>
              <div className="flex justify-between">
                <li>Pizza</li><label className="mb-2 bg-gray-200 pl-2 pr-2 rounded-xl">32</label>
              </div>
              <div className="flex justify-between">
                <li>Dessert</li><label className="mb-2 bg-gray-200 pl-2 pr-2 rounded-xl">48</label>
              </div>
            </ul>
          </div>
          {/* Order By Categories */}
          <div className="flex flex-col mt-10">
            <h1 className="font-bold mb-2">Order By</h1>
           <div className="flex relative"> 
              <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2"></input>
              <label className="absolute bottom-2 left-7">Termurah</label>
          </div>
          <div className="flex relative"> 
              <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2"></input>
              <label className="absolute bottom-2 left-7">Terlaris</label>
          </div>
          <div className="flex relative"> 
              <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2"></input>
              <label className="absolute bottom-2 left-7">Termahal</label>
          </div>
          </div>
          {/* Rating Container */}
          <div className="flex flex-col mt-10">
            <h1 className="font-bold mb-2">Rating</h1>
           <div  className="flex">
             <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2">
               </input>
               <div className="flex w-3 h-3 gap-1">
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/rate-star.png" alt="rate-star"/>
                 </div>
          </div>
          <div  className="flex">
             <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2">
               </input>
               <div className="flex w-3 h-3 gap-1">
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/unrate-star.png" alt="unrate-star"/>
                 </div>
          </div>
          <div  className="flex">
             <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2">
               </input>
               <div className="flex w-3 h-3 gap-1">
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/unrate-star.png" alt="unrate-star"/>
                 <img src="images/unrate-star.png" alt="unrate-star"/>
                 </div>
          </div>
          <div  className="flex">
             <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2">
               </input>
               <div className="flex w-3 h-3 gap-1">
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/unrate-star.png" alt="unrate-star"/>
                 <img src="images/unrate-star.png" alt="unrate-star"/>
                 <img src="images/unrate-star.png" alt="unrate-star"/>
                 </div>
          </div>
          <div  className="flex">
             <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2">
               </input>
               <div className="flex w-3 h-3 gap-1">
                 <img src="images/rate-star.png" alt="rate-star"/>
                 <img src="images/unrate-star.png" alt="unrate-star"/>
                 <img src="images/unrate-star.png" alt="unrate-star"/>
                 <img src="images/unrate-star.png" alt="unrate-star"/>
                 <img src="images/unrate-star.png" alt="unrate-star"/>
                 </div>
          </div>

          </div>
          {/* Price Container */}
          <div className="flex flex-col mt-10">
          <h1 className="font-bold">Price</h1>
          <div><input
                type="range"
                className="w-full h-1 p-0 bg-gray-200 focus:outline-none focus:ring-0 focus:shadow-sm"
                min="0"
                max="5"
              />
           </div>
           <div className="flex">
             <div className="w-2/4"><label>Min</label><br></br><input className="pl-1 w-20 bg-gray-100 border border-gray-400 rounded-lg" type="text" value="0"/></div>
             <div  className="w-2/4"><label>Max</label><br></br><input className="pl-1 w-20 bg-gray-100 border border-gray-400 rounded-lg" type="text" value="000"/></div>
           </div>
          </div>
          <div className="flex mt-10">
            <button className="py-1 px-3 mr-8 rounded-lg font-bold bg-lime-700 text-white">Apply</button><label>Reset</label></div>
        </div>
        <div className="bg-gray-100">
          <div className="bg-yellow-100">
          </div>
        </div>
        {/* Container Content */}
        <div>
          <div className="flex flex-wrap w-full p-6 gap-6" >
            {products.map((item,index)=>{
            return(<ProductCard item={item}></ProductCard>
          )
         })}

      {/* Show More Products */}
      </div >
        <div className="flex justify-center relative">
          <button className="flex mt-16 py-1 pl-6 pr-8 rounded-lg font-bold border-2 border-lime-800 bg-lime-700 text-white">Show More Products<span><DownOutlined className="text-xs ml-1 absolute bottom-3"/></span></button>
        </div>  
       </div>
      
        
      </div>
        </div>

    );
}