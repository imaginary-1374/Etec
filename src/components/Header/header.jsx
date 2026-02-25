import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from "./logo";
import Links from "./links";

export default function Header() {
  const [isDown, setisDown] = useState(false);

  // {======header scroll effect======}
  const [scrollDirection, setScrollDirection] = useState(
    "-translate-x-1/2 translate-y-0",
  );
  const scrollref = useRef(0);

  const handlescroll = () => {
    if (isDown) return;

    let currentScrollY = window.pageYOffset;
    // بدل ما يرندر كل بكسل يرندر لما يتخطى عتبة حرجة(قيمة معينة)
    let threshold = Math.abs(currentScrollY - scrollref.current); //Math.abs() القيمة المطلقة
    if (threshold > 120) {
      // {scroll down header disappear scroll up header appear}
      if (currentScrollY < scrollref.current) {
        setScrollDirection("-translate-x-1/2 translate-y-0");
      } else {
        setScrollDirection("-translate-x-1/2 -translate-y-full opacity-0");
      }
      scrollref.current = currentScrollY;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  });
  // {======header scroll effect======}
  return (
    <header
      className={`fixed top-0 left-1/2 ${scrollDirection} w-full max-w-screen-xl flex items-center justify-between
                  text-nowrap bg-white px-6 py-5 z-50
                  md:py-8
                  transition ease-out duration-400`}
    >
      <Logo />
      {/*======nav======*/}
      <nav className="group flex items-center">
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setisDown(!isDown)}
        >
          {isDown ? (
            <FaXmark className="w-7 h-7" />
          ) : (
            <FaBars className="w-7 h-7" />
          )}
        </div>
        {/*======links======*/}
        <ul
          className={`
          absolute top-full left-0 z-[5] w-full
          bg-white overflow-hidden flex flex-col items-center px-6
          divide-y divide-stone-300
          md:flex-row md:static md:divide-none gap-10
          transition-all duration-300 ease-in-out 
          ${
            isDown
              ? "py-6 h-screen"
              : "pointer-events-none md:pointer-events-auto max-md:h-0 max-md:py-0"
          }`}
        >
          <Links />
        </ul>
        {/*======links======*/}
      </nav>
      {/*======nav======*/}
    </header>
  );
}
