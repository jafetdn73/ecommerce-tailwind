import "./App.css";

function App() {
  return (
    <div className="bg-white container mx-auto">
      <div className="flex justify-between py-4 border-b border-gray-300">
        <div className="flex gap-5">
          <a href="http://google.com" className="text-emerald-500">
            Chat With Us
          </a>
          <a href="http://facebook.com">+62 8785100767</a>
          <a href="http://ggogl.com">jfdn73@gmail.com</a>
        </div>

        <div className="">
          <ul className="flex gap-8 text-emerald-500">
            <li>Blog</li>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-16">
        <h1 className="text-3xl font-bold">LeumangShop</h1>
        <div className="flex w-full justify-center items-center">
          <input
            type="text"
            placeholder="Search Product, Categories"
            className="w-1/3 border border-gray-300 bg-gray-200 rounded-xl pl-4 py-2"
          />
          <img src="/images/search-icon.png" alt="search" className="w-5 h-5 -ml-8"/>
        </div>
        <div className="flex gap-10">
          <img src="/images/user-icon.png" alt="user" className="w-8 h-6"/>
          <div className="relative">
            <img src="/images/cart-icon.png" alt="icon" className="w-8 h-6"/>
            <label className="absolute bottom-2 -left-2 bg-orange-600 text-white py-0.25 px-1 rounded-full text-sm">4</label>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mt-10 py-4 pl-4 text-base font-medium">
        <ul className="flex gap-12">
          <li>Bakery</li>
          <li>Fruit and vegetables</li>
          <li>Meat and fish</li>
          <li>Drinks</li>
          <li>Kitchen</li>
          <li>Special Nutrition</li>
          <li>Baby</li>
          <li>Pharmacy</li>
        </ul>
        </div>
    
      {/* Container Wrapper */}
      <div className="flex gap-4">
        {/* Side Bar Container */}
        <div className="flex flex-col w-60" >
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
           <div>
              <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2"></input>
              <span className="mb-1">Termurah</span>
          </div>
          <div>
            <input type="checkbox"  className="accent-lime-700 w-5 h-5 mr-2 mb-2"></input>
            <label>Terlaris</label>
          </div>
          <div>
            <input type="checkbox"  className="accent-lime-700 w-5 h-5 mr-2 mb-2"></input>
            <label>Termahal</label>
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
             <div className="w-2/4"><label>Min</label><br></br><input className="w-20 bg-gray-100 border border-gray-400 rounded-lg" type="text"/></div>
             <div  className="w-2/4"><label>Max</label><br></br><input className="w-20 bg-gray-100 border border-gray-400 rounded-lg" type="text"/></div>
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
        <div className="flex flex-col bg-lime-100 w-full" >
          <div className="w-60 m-8 p-4 bg-white border border-gray-400 rounded-lg">
            <img src="images/bola-susun.png" alt="bola-susun" width="500" height="600"/>
          </div>

        </div>
      </div>
      
      {/* footer */}
      <div className="flex justify-between mb-8 mt-40">

<div className="">
  <h2 className="font-bold mb-4">Get in touch</h2>
  <ul className="text-sm text-green-600">
    <li className="mb-2">About Us</li>
    <li className="mb-2">Careers</li>
    <li className="mb-2">Press Releases</li>
    <li className="mb-2">Blog</li>
  </ul>
</div>

<div className="">
  <h2 className="font-bold mb-4">Connections</h2>
  <ul className="text-sm text-green-600">
    <li className="mb-2">Facebook</li>
    <li className="mb-2">Twitter</li>
    <li className="mb-2">Instagram</li>
    <li className="mb-2">Youtube</li>
    <li className="mb-2">LinkedIn</li>
  </ul>
</div>

<div className="">
  <h2 className="font-bold mb-4">Earnings</h2>
  <ul className="text-sm text-green-600">
    <li className="mb-2">Become an Affiliate</li>
    <li className="mb-2">Advertise your product</li>
    <li className="mb-2">Sell on Market</li>
  </ul>
</div>

<div className="">
  <h2 className="font-bold mb-4">Account</h2>
  <ul className="text-sm text-green-600">
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
  );
}

export default App;