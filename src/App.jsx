import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
 return (
  <>
   <Router>
    <Nav />
    <Routes>
     <Route index element={<Dashboard />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/products" element={<Products />} />
    </Routes>
   </Router>
  </>
 );
}

export default App;
