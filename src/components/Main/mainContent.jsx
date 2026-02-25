import { NavLink } from "react-router-dom";

import Featured from "./featured";
import Categories from "./categories";
import Articles from "./articles";
export default function Main() {
  return (
    <main
      className="w-full m-auto mt-32 overflow-visible
                     md:mt-40"
    >
      <div
        className="flex flex-col gap-2 px-4 
                      md:px-0 md:py-4"
      >
        <h1
          className="first-letter:uppercase text-5xl text-stone-900 
                       md:text-5xl md:w-2xl md:font-medium md:leading-tight"
        >
          elevate your lifestyle with premium essentials.
        </h1>
        <div
          className="flex flex-col items-start gap-8
                         md:w-full md:justify-between md:flex-row"
        >
          <h3
            className="first-letter:uppercase max-w-xl text-lg text-stone-700
                         md:text-xl md:font-medium"
          >
            elevate your daily routine with our meticulously selected premium
            goods and curated essentials.
          </h3>
          <NavLink to={"/shop"} className={"contents"}>
            <button
              className="first-letter:uppercase border rounded-full py-4 px-6 cursor-pointer shrink-0 
                              hover:bg-stone-800 hover:text-white active:bg-stone-800 active:text-white transition-all duration-250"
            >
              browse all products
            </button>
          </NavLink>
        </div>
      </div>
      <Featured />
      <Categories />
      <Articles />
    </main>
  );
}
