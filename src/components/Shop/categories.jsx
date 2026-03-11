export default function Categories({ activeId, setActiveId }) {
  const cat = [
    { id: "all products" },
    { id: "headphones" },
    { id: "displays" },
    { id: "watches" },
    { id: "phones" },
  ];
  return (
    <div className="flex items-center gap-6 flex-nowrap">
      {cat.map((c) => {
        const isActive = activeId === c.id;
        return (
          <div
            onClick={() => setActiveId(c.id)}
            key={c.id}
            className={`text-nowrap first-letter:uppercase rounded-full px-4 py-2 transition duration-200 ease-in-out cursor-pointer 
                      ${isActive ? "bg-black text-white" : "bg-stone-100"}`}
          >
            {c.id}
          </div>
        );
      })}
    </div>
  );
}
