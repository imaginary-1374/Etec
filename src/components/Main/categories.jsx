import { useState, useEffect } from "react";

import watches from "/yD047Kl5EbewEFW5RyrRcTsrA.png";
import displays from "/epvE5hFHNlkcGbnrpB2IayKiHUE.png";
import headphones from "/Q0vJfOd2ycuoBVOqcEeLEBIEHY.png";
import phones from "/R3ixekN751tQ9urOSnopl9GZo8.png";
import { NavLink } from "react-router-dom";
import useActiveCategory from "../../hooks/useActiveCategory";

export default function Categories() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { _activeId, setActiveId } = useActiveCategory();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-4 py-20 grid gap-8">
      <h2
        className="first-letter:uppercase max-w-xl text-3xl font-medium tracking-tight
                     lg:text-4xl"
      >
        Browse by categories
      </h2>
      <h3
        className="first-letter:uppercase max-w-xl text-lg font-normal text-stone-700
                     md:text-xl lg:text-2xl"
      >
        Explore our diverse range of categories tailored to meet your specific
        needs and interests.
      </h3>

      {/* Main Grid Container */}
      <div
        className="grid grid-cols-1 gap-8
                   md:grid-cols-4"
      >
        {/* All Products */}
        <div
          className="grid grid-rows-[auto_minmax(0,300px)] bg-stone-100 rounded-lg overflow-hidden
                     md:col-span-2 md:row-span-2"
        >
          <div className="grid gap-2 p-6">
            <h1
              className="first-letter:uppercase text-2xl font-medium tracking-tight
                         lg:text-4xl"
            >
              all products
            </h1>
            <h3
              className="first-letter:uppercase text-sm font-normal text-stone-700
                         md:text-base lg:text-lg"
            >
              Discover endless possibilities with our All Products category.
              Shop now for everything you need in one convenient place.
            </h3>
            <NavLink
              to="/shop"
              className="inline-block first-letter:uppercase text-center border border-transparent rounded-full py-3 px-8 cursor-pointer bg-white
                         hover:bg-stone-800 hover:text-white active:bg-stone-800 active:text-white transition-all duration-250"
              onClick={() => setActiveId("all products")}
            >
              {screenSize > 768 ? "Browse all products" : "Technology products"}
            </NavLink>
          </div>
          <div className="w-full h-full">
            <img
              className="object-cover w-full h-full object-center mix-blend-multiply"
              src={watches}
              alt="Products collection"
            />
          </div>
        </div>

        {/* Laptops */}
        <div
          className="items-center gap-6 bg-stone-100 rounded-lg overflow-hidden p-6 
                        md:col-span-2 grid grid-cols-2 "
        >
          <div className="grid gap-3">
            <h1
              className="first-letter:uppercase text-2xl font-medium tracking-tight
                           lg:text-4xl"
            >
              displays
            </h1>
            <h3
              className="first-letter:uppercase text-sm font-normal text-stone-700
                           md:text-base lg:text-lg"
            >
              Experience crystal-clear clarity and vibrant visuals with our
              Displays.
            </h3>

            <NavLink
              to="/shop"
              className="first-letter:uppercase border border-transparent rounded-full py-3 px-8 cursor-pointer bg-white text-center
                        hover:bg-stone-800 hover:text-white active:bg-stone-800 active:text-white transition-all duration-250"
              onClick={() => setActiveId("displays")}
            >
              displays
            </NavLink>
          </div>
          <div className="flex-shrink-0">
            <img
              className="object-contain w-full h-full mix-blend-multiply"
              src={displays}
              alt="Displays collection"
            />
          </div>
        </div>

        {/* Headphones */}
        <div className="relative grid place-items-center bg-stone-100 rounded-lg overflow-hidden h-full max-h-[250px]">
          <div className="w-full h-full">
            <img
              className="object-scale-down w-full h-full m-auto mix-blend-multiply"
              src={headphones}
              alt="Headphones collection"
            />
          </div>
          <div className="absolute inset-0 grid items-end justify-center pb-8">
            <NavLink
              to="/shop"
              className="first-letter:uppercase border border-transparent rounded-full py-3 px-8 cursor-pointer bg-white
                        hover:bg-stone-800 hover:text-white active:bg-stone-800 active:text-white transition-all duration-250"
              onClick={() => setActiveId("headphones")}
            >
              headphones
            </NavLink>
          </div>
        </div>

        {/* Phones */}
        <div className="relative grid place-items-center bg-stone-100 rounded-lg overflow-hidden h-full max-h-[250px]">
          <div className="w-full h-full">
            <img
              className="object-scale-down w-full h-full m-auto mix-blend-multiply"
              src={phones}
              alt="Phones collection"
            />
          </div>
          <div className="absolute inset-0 grid items-end justify-center pb-8">
            <NavLink
              to="/shop"
              className="first-letter:uppercase border border-transparent rounded-full py-3 px-8 cursor-pointer bg-white
                        hover:bg-stone-800 hover:text-white active:bg-stone-800 active:text-white transition-all duration-250"
              onClick={() => setActiveId("phones")}
            >
              phones
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
