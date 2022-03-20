import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
 <div>
  <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="layout" element={<Layout></Layout>} />
    <Route path="detail" element={<Detail></Detail>} />
   </Routes>
</div>
   
  );
}

export default App;