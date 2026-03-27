import Card from "../Main/productCard";
import { ProductsContext } from "../../context/productscontext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function Related() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p.id === Number(id));
  const relatedIds = products
    .filter((p) => p.category == product.category && p.id != product.id)
    .slice(0, 3);

  return (
    <div className="my-12">
      <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-8">
        Related Products
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-20">
        {relatedIds.map((p) => (
          <Card key={p.id} Id={p.id} />
        ))}
      </div>
    </div>
  );
}
