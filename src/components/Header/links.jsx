import { NavLink } from "react-router-dom";

export default function Links(status) {
  const linksArray = [
    { name: "all products", path: "/shop" },
    { name: "about us", path: "/about" },
    { name: "faq", path: "/faq" },
    { name: "blog", path: "/blog" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <>
      {linksArray.map((link) => (
        <NavLink
          onClick={status}
          key={link.path}
          to={link.path}
          className={({isActive}) =>
            `
              cursor-pointer w-full px-2 pb-4 text-start text-xl 
              md:border-none md:pb-0 md:text-lg md:w-auto
              transition-colors duration-300 block
              ${link.name.length < 4 ? " uppercase" : " capitalize"}
              ${isActive ? "text-black font-bold" : "text-stone-600 font-normal"}
              hover:text-black
              `
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
}
