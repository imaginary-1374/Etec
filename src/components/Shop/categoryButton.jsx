export default function CategoryButton({ name, isActive, onClick }) {
  const baseStyles =
    "px-6 py-2 rounded-full border border-stone-300 transition-all duration-300 cursor-pointer text-sm md:text-base text-nowrap";
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${
        isActive
          ? "bg-black text-white border-black shadow-md"
          : "bg-white text-stone-600 hover:border-stone-800 active:scale-95"
      }`}
    >
      {name}
    </button>
  );
}
