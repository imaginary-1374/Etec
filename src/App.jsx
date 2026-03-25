// https://etec.framer.website

import { Route, Routes } from "react-router-dom";

import { ProductsContext } from "./context/productscontext";
import ActiveCategoryProvider from "./context/categoryContext";

import products from "./data/products.json";

import Header from "./components/Header/header";
import Cart from "./components/Cart/Cart";
import Main from "./components/Main/mainContent";
import Shop from "./components/Shop/mainShop";
import ProductPage from "./components/ProductPage/ProductPage";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <ProductsContext value={{ products }}>
      <div className="w-full max-w-screen-xl m-auto md:px-6">
        <Cart />
        <Header />
        <div className="mt-32 md:mt-40">
          <ActiveCategoryProvider>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="*" element={<div>page not found</div>} />
            </Routes>
          </ActiveCategoryProvider>
        </div>
        <Footer />
      </div>
    </ProductsContext>
  );
}

export default App;
