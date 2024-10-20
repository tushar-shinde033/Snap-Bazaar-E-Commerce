import "./App.css";
import Navbar from "./conponents/navbar/Navbar";
import Shop from "./Pages/shop";
import ShopCategory from "./Pages/ShopCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/loginSignup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./conponents/Footer/Footer";
import mens_banner from "./conponents/Assets/banner_mens.png";
import womens_banner from "./conponents/Assets/banner_women.png";
import kids_banner from "./conponents/Assets/banner_kids.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={mens_banner} category="Men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={womens_banner} category="Women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="Kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
