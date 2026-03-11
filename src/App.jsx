// https://etec.framer.website

import { Route, Routes } from "react-router-dom";

import { ProductsContext } from "./context/productscontext";
import products from "./data/products.json";

import Header from "./components/Header/header";
import CartIcon from "./components/Cart/CartIcon";
import Main from "./components/Main/mainContent";
import Shop from "./components/Shop/mainShop";
import ProductPage from "./components/ProductPage/productPage";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <ProductsContext value={{ products }}>
      <div className="w-full max-w-screen-xl m-auto md:px-6">
        <CartIcon />
        <Header />
        <div className="mt-32 md:mt-40">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductPage />} />
            <Route path="*" element={<div>page not found</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ProductsContext>
  );
}

export default App;
