import { NavLink } from "react-router-dom";

export default function Links() {
  const linkStyles =
    "first-letter:uppercase hover:text-stone-700 active:text-stone-700 transition-all duration-250 cursor-pointer";

  return (
    <div className="flex justify-start md:justify-center items-center gap-12 text-stone-500 flex-2">
      {/* Pages Section */}
      <div className="flex flex-col gap-4">
        <p className="first-letter:uppercase font-semibold text-stone-800">
          pages
        </p>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? "text-stone-900 font-medium" : ""}`
          }
        >
          home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? "text-stone-900 font-medium" : ""}`
          }
        >
          shop
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? "text-stone-900 font-medium" : ""}`
          }
        >
          about
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? "text-stone-900 font-medium" : ""}`
          }
        >
          blog
        </NavLink>
      </div>

      {/* Support Section */}
      <div className="flex flex-col gap-4">
        <p className="first-letter:uppercase font-semibold text-stone-800">
          support
        </p>

        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `uppercase ${linkStyles} ${isActive ? "text-stone-900 font-medium" : ""}`
          }
        >
          faq
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? "text-stone-900 font-medium" : ""}`
          }
        >
          contact
        </NavLink>

        <NavLink
          to="/product"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? "text-stone-900 font-medium" : ""}`
          }
        >
          product
        </NavLink>

        <NavLink
          to="/404"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? "text-stone-900 font-medium" : ""}`
          }
        >
          404
        </NavLink>
      </div>
    </div>
  );
}
