import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";

function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="product" element={<Product/>} />
            <Route path="pricing" element={<Pricing/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
