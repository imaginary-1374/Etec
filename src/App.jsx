// https://etec.framer.website

import { Route, Routes, NavLink } from "react-router-dom";

import { ProductsContext } from "./context/productscontext";
import products from "./data/products.json";

import Header from "./components/Header/header";
import CartIcon from "./components/Cart/CartIcon";
import Main from "./components/Main/mainContent";
import Shop from "./components/Shop/mainShop";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <ProductsContext value={{ products }}>
      <div className="w-full max-w-screen-xl m-auto md:px-6">
        <CartIcon />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<div>page not found</div>} />
        </Routes>
        <Footer />
      </div>
    </ProductsContext>
  );
}

export default App;
