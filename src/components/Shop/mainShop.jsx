import { IoSearchOutline } from "react-icons/io5";
import Categories from "./categories";
import Card from "../Main/productCard";
import SearchOverlay from "./SearchOverlay";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/productscontext";
import useActiveCategory from "../../hooks/useActiveCategory";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  const [isOpen, setIsOpen] = useState(false);
  const { activeId, setActiveId } = useActiveCategory();

  const product = products.map((p) => p.id);
  if (!product) {
    return null;
  }
  return (
    <div>
      <div className="px-4 first-letter:uppercase mb-8">
        <h1 className="text-5xl mb-6">shop</h1>
        <h2 className="text-lg">
          Check out our full collection of products tailored to your needs
        </h2>
      </div>
      <div className="px-4 flex gap-6 items-center justify-between md:flex-row-reverse">
        <IoSearchOutline
          size={24}
          className="flex-shrink-0 cursor-pointer justify-start md:justify-end"
          onClick={() => setIsOpen(true)}
        />
        <div className="overflow-x-scroll scrollbar-hidden">
          <Categories activeId={activeId} setActiveId={setActiveId} />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-20 p-4 my-4">
        {products
          .filter(
            (item) => activeId === "all products" || item.category === activeId,
          )
          .map((item) => (
            <Card key={item.id} Id={item.id} />
          ))}
      </div>
      <div tabIndex="-1" className={isOpen ? "visible" : "hidden"}>
        <SearchOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
