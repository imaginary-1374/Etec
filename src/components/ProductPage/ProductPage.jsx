import { useParams, Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext, useState } from "react";
import { GoDotFill } from "react-icons/go";
import AddToCart from "./ProductActions";
import ProductFeatures from "./ProductFeatures";
import Comments from "./Comments";
import Related from "./Related";
import getImagePath from "../../utils/helpers";

export default function ProductPage() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(product?.images?.thumbnail);

  if (!product) {
    return <div className="p-10 text-center">Product not found.</div>;
  }

  const allImages = [
    product.images.thumbnail,
    ...(product.images.gallery || []),
  ].slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <nav className="flex items-center gap-2 mb-8 text-stone-500 text-sm">
        <Link to="/" className="hover:text-stone-800 transition-colors">
          Home
        </Link>
        <GoDotFill size={8} className="text-stone-300" />
        <Link to="/shop" className="hover:text-stone-800 transition-colors">
          Shop
        </Link>
        <GoDotFill size={8} className="text-stone-300" />
        <span className="text-stone-800 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Gallery Thumbnails*/}
        <div className="order-2 md:order-1 md:col-span-2 flex flex-row md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hidden">
          {allImages.map((img, index) => (
            <img
              key={index}
              src={getImagePath(product.folderId, img)}
              alt=""
              onClick={() => setActiveImage(img)}
              className={`
                w-20 h-20 md:w-full aspect-square object-cover rounded-lg cursor-pointer transition-all duration-300
                ${
                  activeImage === img
                    ? "border-2 border-stone-800 opacity-100 shadow-md scale-[1.02]"
                    : "border border-stone-200 opacity-60 hover:opacity-100"
                }
              `}
            />
          ))}
        </div>

        {/* Main Active Image */}
        <div className="order-1 md:order-2 md:col-span-5 lg:col-span-6">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone-100 bg-stone-50">
            <img
              src={getImagePath(product.folderId, activeImage)}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" // تأثير زووم خفيف عند عمل Hover
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="order-3 md:order-3 md:col-span-5 lg:col-span-4 flex flex-col gap-5 pt-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-stone-800 mt-3">
              ${product.price}
            </p>
          </div>

          <div className="h-px bg-stone-200 w-full"></div>

          <div className="prose prose-stone text-stone-600 leading-relaxed">
            <p>{product.description}</p>
          </div>
          <AddToCart />
        </div>
      </div>
      <ProductFeatures />
      <Comments />
      <Related />
    </div>
  );
}
