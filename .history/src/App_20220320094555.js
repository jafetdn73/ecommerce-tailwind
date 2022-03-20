import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
 <div>
  <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="detail" element={<Detail></Detail>} />
   </Routes>
</div>
   
  );
}

export default App;