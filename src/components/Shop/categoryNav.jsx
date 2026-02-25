import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchOverlay from "./SearchOverlay";
import CategoryButton from "./categoryButton";

export default function CategoryNav({ active = "all", setActive }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const categories = [
    { name: "All products", id: "all" },
    { name: "Headphones", id: "headphones" },
    { name: "Displays", id: "displays" },
    { name: "Watches", id: "watches" },
    { name: "Phones", id: "phones" },
  ];
  return (
    <div className="relative flex items-center w-full bg-white">
      {/* search button*/}
      <div className="sticky left-0 md:left-auto md:right-0 z-10 bg-white px-2 order-first md:order-last">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="p-2 rounded-full transition-colors cursor-pointer"
        >
          <IoSearch size={24} className="text-stone-600" />
        </button>
      </div>

      {/* Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        value={searchInput}
        onChange={setSearchInput}
      />

      {/* categories*/}
      <div className="flex-1 flex gap-4 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth">
        {categories.map((cat) => (
          <CategoryButton
            key={cat.id}
            name={cat.name}
            isActive={active === cat.id}
            onClick={() => setActive(cat.id)}
          />
        ))}
      </div>
    </div>
  );
}
