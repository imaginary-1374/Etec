import { IoSearch } from "react-icons/io5";
import useSearch from "../../hooks/useSearch";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function SearchOverlay({ isOpen, setIsOpen }) {
  const [inVal, setInVal] = useState("");
  const products = useSearch(inVal);
  const ul_classname = `
  absolute top-full left-4 right-4 
  bg-white 
  flex flex-col 
  divide-y divide-stone-100 
  shadow-2xl 
  overflow-y-auto
  z-50
  rounded-b-2xl
  md:mt-2
  max-h-60
  overscroll-contain
  scrollbar-hidden 
`;

  const li_classname = `
  cursor-pointer w-full block
  pl-16 pr-6 py-4 
  text-start text-stone-600 
  transition-colors duration-200 
  hover:bg-stone-50 hover:text-black
`;

  return (
    <div
      className={isOpen ? "visible" : "hidden"}
      onClick={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/90 backdrop-blur-sm cursor-pointer md:py-18">
        <div
          className="relative w-full max-w-2xl px-4 mt-20 md:mt-0"
          onClick={(e) => e.stopPropagation()}
        >
          <IoSearch
            className="absolute left-10 md:left-10 top-1/2 -translate-y-1/2 text-stone-400"
            size={28}
          />
          <input
            type="text"
            autoFocus
            value={inVal}
            onChange={(e) => setInVal(e.target.value)}
            placeholder="Type in to search..."
            className="w-full pl-16 pr-6 py-5 text-2xl bg-white border-none md:rounded-2xl shadow-2xl outline-none"
          />
          <ul className={ul_classname}>
            {products.map((i) => (
              <li key={i.id} className="w-full">
                <Link
                  to={`/product/${i.id}`}
                  className={li_classname}
                  onClick={() => setIsOpen(false)}
                >
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
