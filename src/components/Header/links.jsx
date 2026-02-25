import { NavLink } from "react-router-dom";

export default function Links() {
  const linksArray = [
    { name: "all products", path: "/shop" },
    { name: "about us", path: "/about" },
    { name: "faq", path: "/faq" },
    { name: "blog", path: "/blog" },
    { name: "contact", path: "/contact" },
  ];

  const classname = (isActive) => `
            cursor-pointer w-full px-2 pb-4 text-start text-xl 
            md:border-none md:pb-0 md:text-lg md:w-auto
            transition-colors duration-300 block
            ${isActive ? "text-black font-bold" : "text-stone-600 font-normal"}
            hover:text-black
        `;
  return (
    <>
      {linksArray.map((link) => (
        <li key={link.path} className="list-none w-full md:w-auto">
          <NavLink
            to={link.path}
            className={
              classname + (link.name.length < 4 ? " uppercase" : " capitalize")
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </>
  );
}
