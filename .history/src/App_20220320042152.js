import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
 <div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
   </Routes>
  <Layout></Layout>
</div>
   
  );
}

export default App;