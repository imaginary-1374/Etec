import reviews from "../../data/customers.json";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
export default function Comments() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p.id === Number(id));
  const category = product.category;
  return (
    <div className="py-16 border-b border-stone-300">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
        <h2 className="flex flex-col text-4xl font-bold tracking-tight text-gray-900 leading-tight">
          What customers
          <span className="text-gray-400 font-medium">are saying</span>
        </h2>
        <p className="max-w-sm text-gray-500 text-sm leading-relaxed">
          Experience the convenience and satisfaction shared by our thriving
          community of shoppers who trust our ecommerce store for their every
          purchase.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.customer_reviews[category].map((i, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-2xl flex flex-col justify-between min-h-[250px]"
          >
            <p className="text-gray-600 text-sm leading-6">{i.comment}</p>
            <span className="mt-6 font-semibold text-gray-800 text-sm">
              {i.author}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
