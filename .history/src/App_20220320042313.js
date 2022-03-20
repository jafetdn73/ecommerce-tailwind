import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
 <div>
  <Routes>
    <Route path="/" element={<Layout></Layout>} />
   </Routes>
</div>
   
  );
}

export default App;