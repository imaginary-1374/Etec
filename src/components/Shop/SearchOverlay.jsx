import { createPortal } from "react-dom";
import { IoSearch } from "react-icons/io5";

import useSearch from "../../hooks/useSearch";

export default function SearchOverlay({ isOpen, onClose, value, onChange }) {
  const products = useSearch(value);

  if (!isOpen) return null;

  const ul_classname = `
  absolute top-full left-4 right-4 
  bg-white 
  flex flex-col 
  divide-y divide-stone-100 
  shadow-2xl 
  overflow-hidden
  z-50
  rounded-b-2xl
  md:mt-2
`;

  const li_classname = `
  cursor-pointer w-full 
  pl-16 pr-6 py-4 
  text-start text-stone-600 
  transition-colors duration-200 
  hover:bg-stone-50 hover:text-black
`;
  const product = products.map((item) => {
    return (
      <li key={item.id} className={li_classname}>
        {item.name}
      </li>
    );
  });

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/90 backdrop-blur-sm cursor-pointer md:items-center"
    >
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type in to search..."
          className="w-full pl-16 pr-6 py-5 text-2xl bg-white border-none md:rounded-2xl shadow-2xl outline-none"
        />
        <ul className={ul_classname}>{product}</ul>
      </div>
    </div>,
    document.body,
  );
}
