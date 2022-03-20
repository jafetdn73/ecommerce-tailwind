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
      <div className="bg-gray-100">
        {/* Side Bar Container */}
        <div className="flex flex-col w-60 bg-yellow-100" >
          {/* Categories Container */}
          <div className="flex flex-col">
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
          <div className="bg-gray-100 flex flex-col">
            <h1 className="font-bold mb-2">Order By</h1>
           <div>
             <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2">
               </input>
               <span>Termurah</span>
          </div>
          <div>
            <input type="checkbox"  className="accent-lime-700 w-5 h-5 mr-2 mb-2"></input>
            <span>Terlaris</span>
          </div>
          <div>
            <input type="checkbox"  className="accent-lime-700 w-5 h-5 mr-2 mb-2"></input><label>Termahal</label>
          </div>
          </div>
          {/* Rating Container */}
          <div className="bg-gray-100 flex flex-col">
            <h1 className="font-bold mb-2">Rating</h1>
           <div  className="flex">
             <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2">
               </input>
               <div className="flex w-4 h-4 gap-1">
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 </div>
          </div>
          <div  className="flex">
             <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2">
               </input>
               <div className="flex w-4 h-4 gap-1">
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 </div>
          </div>
          <div  className="flex">
             <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2">
               </input>
               <div className="flex w-4 h-4 gap-1">
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 </div>
          </div>
          <div  className="flex">
             <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2">
               </input>
               <div className="flex w-4 h-4 gap-1">
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 </div>
          </div>
          <div  className="flex">
             <input type="checkbox" className="accent-lime-700 w-5 h-5 mr-2 mb-2">
               </input>
               <div className="flex w-4 h-4 gap-1">
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 <img src="images/rate-star.png"/>
                 </div>
          </div>

          {/* Price Container */}
          <div className="bg-gray-100">
          <h1 className="font-bold">Price</h1>
          </div>
          <button className="font-bold">Apply</button>
        </div>
        <div className="bg-gray-100">
          <div className="bg-yellow-100">
          </div>
        </div>
      </div>
    
    
    
    </div>
  );
}

export default App;