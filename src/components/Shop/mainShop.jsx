import Card from "../Main/productCard";
import CategoryNav from "./categoryNav";
import { useContext } from "react";
import { ProductsContext } from "../../context/productscontext";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="relative mt-30 px-4 max-w-[1440px] mx-auto mb-20">
      {/* Header Section */}
      <div className="capitalize mb-10 flex flex-col gap-4">
        <div>
          <h1 className="font-semibold text-5xl py-2 tracking-tight">shop</h1>
          <h2 className="text-lg text-stone-500 max-w-xl leading-relaxed">
            check out our full collection of products tailored to your needs
          </h2>
        </div>

        {/* Category Filter */}
        <CategoryNav active={"all"} setActive={""} />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 justify-items-center sm:justify-items-stretch">
        {products.map((item) => (
          <Card key={item.id} Id={item.id} />
        ))}
      </div>
    </div>
  );
}
