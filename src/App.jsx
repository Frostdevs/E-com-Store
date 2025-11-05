import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landing-page/Landingpage";
import Contact from "./pages/Contact-Page/Contact";
import Hotdeal from "./pages/Hot-deal/Hot"
import Product from "./pages/Product-page/Product"
import Cart from "./pages/Cart/Cart";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";


function App() {
  const [count, setCount] = useState(0);

  return (
   
   <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hot" element={<Hotdeal />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
