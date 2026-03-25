import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../context/productscontext";
import getImagePath from "../../utils/helpers";

export default function Card({ Id }) {
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p.id === Id);
  if (!product) {
    return null;
  }
  return (
    <NavLink
      key={product.id}
      to={`/product/${product.id}`}
      className="relative min-w-[300px] min-h-[400px] bg-stone-100 p-4 rounded-3xl drop-shadow-xs  
                group hover:scale-101 hover:saturate-115 hover:contrast-105 active:contrast-105 active:saturate-115 active:scale-101
                transition-all duration-200 ease-in-out"
    >
      <img
        className="object-cover w-full h-full w-full"
        src={getImagePath(product.folderId, product.images.thumbnail)}
        alt={product.name}
      />
      {product.featured && (
        <p className="absolute capitalize top-0 px-4 py-1 mt-6 border border-stone-600 text-stone-600 rounded-full bg-white/50">
          featured
        </p>
      )}
      <div className=" absolute top-full inset-x-0 p-4 flex justify-between items-start">
        <p className="text-lg">{product.name}</p>
        <p className="text-lg text-stone-400 ">USD {product.price}</p>
      </div>
    </NavLink>
  );
}
