import ItemMenuUtama from "./Item_menu_utama";
import {ShoppingOutlined} from "@ant-design/icons";
import {UserOutlined} from "@ant-design/icons";
import {SearchOutlined} from "@ant-design/icons";

// function Layout(props){
const Layout = (props) => {
    return (
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
    
    {props.children}
     

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