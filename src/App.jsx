import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList/CityList.jsx";
import {useEffect, useState} from "react";

const BASE_URL = 'http://localhost:8000';

function App() {
  const [cities, setCities] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/cities`);
            const data = await res.json();
            setCities(data);
        } catch {
            alert("Failed to fetch cities.");
        } finally {
            setLoading(false);
        }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage/>} />
            <Route path="product" element={<Product/>} />
            <Route path="pricing" element={<Pricing/>} />
            <Route path="login" element={<Login/>} />
            <Route path="app" element={<AppLayout/>}>
                <Route index element={<CityList />} />
                <Route path="cities" element={<CityList />} />
                <Route path="countries" element={<p>Countries</p>} />
                <Route path="form" element={<p>Form</p>} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
