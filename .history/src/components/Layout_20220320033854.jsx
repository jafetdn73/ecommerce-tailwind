function Layout()
{
    return
    (

        <div className="bg-white container mx-auto">
      <div className="flex justify-between py-4 border-b border-gray-300">
        <div className="flex gap-5">
          <a href="http://google.com" className="text-lime-600">
            Chat With Us
          </a>
          <a href="http://facebook.com">+62 87812345678</a>
          <a href="http://ggogl.com">jfdn73@gmail.com</a>
        </div>

        <div className="">
          <ul className="flex gap-8 text-lime-600">
            <li>Blog</li>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-16">
        <h1 className="text-3xl font-bold">LeumangShop</h1>
        <div className="flex w-full justify-center items-center relative">
          <input
            type="text"
            placeholder="Search Product, Categories"
            className="w-1/3 border border-slate-400 bg-gray-200 rounded-xl pl-4 py-2"
          />
          <SearchOutlined  className="relative bottom-1 -left-8 text-2xl text-slate-400"/>
        </div>
        <div className="flex gap-6 mr-6">
          <UserOutlined className="text-3xl"/>
          <div className="relative">
            <ShoppingOutlined className="text-3xl"/>
            <label className="w-4 h-4 font-bold absolute bottom-1 -left-2 bg-orange-600 text-white pl-1 pt-0 rounded-full text-xs">4</label>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mt-10 py-4 pl-4 text-base font-medium">
        <ul className="flex gap-12">
         <ItemMenuUtama title="Bakery"></ItemMenuUtama>
         <ItemMenuUtama title="Fruit and vegetables"></ItemMenuUtama>
         <ItemMenuUtama title="Meat and fish"></ItemMenuUtama>
         <ItemMenuUtama title="Drinks"></ItemMenuUtama>
         <ItemMenuUtama title="Kitchen"></ItemMenuUtama>
         <ItemMenuUtama title="Special"></ItemMenuUtama>
         <ItemMenuUtama title="Pharmacy"></ItemMenuUtama>
        </ul>
        </div>
    
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
      
      {/* footer */}
      <div className="flex justify-between mb-8 mt-40">

<div className="">
  <h2 className="font-bold mb-4">Get in touch</h2>
  <ul className="text-sm text-lime-600">
    <li className="mb-2">About Us</li>
    <li className="mb-2">Careers</li>
    <li className="mb-2">Press Releases</li>
    <li className="mb-2">Blog</li>
  </ul>
</div>

<div className="">
  <h2 className="font-bold mb-4">Connections</h2>
  <ul className="text-sm text-lime-600">
    <li className="mb-2">Facebook</li>
    <li className="mb-2">Twitter</li>
    <li className="mb-2">Instagram</li>
    <li className="mb-2">Youtube</li>
    <li className="mb-2">LinkedIn</li>
  </ul>
</div>

<div className="">
  <h2 className="font-bold mb-4">Earnings</h2>
  <ul className="text-sm text-lime-600">
    <li className="mb-2">Become an Affiliate</li>
    <li className="mb-2">Advertise your product</li>
    <li className="mb-2">Sell on Market</li>
  </ul>
</div>

<div className="">
  <h2 className="font-bold mb-4">Account</h2>
  <ul className="text-sm text-lime-600">
    <li className="mb-2">Your account</li>
    <li className="mb-2">Return Center</li>
    <li className="mb-2">100 % purchase protection</li>
    <li className="mb-2">Chat with us</li>
    <li className="mb-2">Help</li>
  </ul>
</div>

</div>

{/* copyright */}
<div className="mb-10">
<h4>Copyright &copy; 2022 petrbilek.com</h4>
</div>  
    
    </div>

    )
}

export default Layout;