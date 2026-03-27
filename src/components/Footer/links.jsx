import { NavLink } from "react-router-dom";

export default function Links() {
  const linkStyles =
    "first-letter:uppercase hover:text-stone-700 active:text-stone-700 transition-all duration-250 cursor-pointer";

  const lftSide = [
    { name: "home", path: "/" },
    { name: "shop", path: "/shop" },
    { name: "about", path: "/about" },
    { name: "cart", path: "/cart" },
  ];
  const rgtSide = [
    { name: "faq", path: "/faq" },
    { name: "contact", path: "/contact" },
    { name: "product", path: "/product" },
    { name: "404", path: "/404" },
  ];
  return (
    <div className="flex justify-start md:justify-center items-center gap-12 text-stone-500 flex-2">
      {/* Pages Section */}
      <div className="flex flex-col gap-4">
        <p className="first-letter:uppercase font-semibold text-stone-800">
          pages
        </p>

        {lftSide.map((p) => (
          <NavLink
            key={p.name}
            to={p.path}
            className={({ isActive }) =>
              `${linkStyles} ${isActive && "text-stone-900 font-medium"}`
            }
          >
            {p.name}
          </NavLink>
        ))}
      </div>

      {/* Support Section */}
      <div className="flex flex-col gap-4">
        <p className="first-letter:uppercase font-semibold text-stone-800">
          support
        </p>

        {rgtSide.map((p) => (
          <NavLink
            key={p.name}
            to={p.path}
            className={({ isActive }) =>
              `${linkStyles} ${isActive && "text-stone-900 font-medium"}`
            }
          >
            {p.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
