import Card from "./productCard";

import { useContext } from "react";
import { ProductsContext } from "../../context/productscontext";

export default function Featured() {
  const { products } = useContext(ProductsContext);
  const featured = products.filter((p) => p.featured).map((p) => p.id);
  return (
    <div
      className="flex gap-4 justify-start py-10 px-4
                 overflow-x-scroll overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {featured.slice(0, 3).map((id) => (
        <Card key={id} Id={id} />
      ))}
    </div>
  );
}
