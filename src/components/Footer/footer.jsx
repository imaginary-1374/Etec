import Sub from "./subscribe";
import Social from "./social";
import Links from "./links";
import location from "/location.png";
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full px-4">
      <Sub />
      <div
        className="flex flex-col gap-6 p-4 bg-stone-100 rounded-3xl
                   md:p-10 md:flex-row md:gap-8 md:items-start"
      >
        <div className="flex flex-1 justify-start">
          <div className="w-fit">
            <Social />
          </div>
        </div>
        <Links />
        <div
          className="relative flex-1 rounded-3xl overflow-hidden self-stretch
                     md:h-auto"
        >
          <img
            className="object-cover w-full h-full"
            src={location}
            alt="Location"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pb-4">
            <div className="first-letter:uppercase py-1 px-4 rounded-xl bg-stone-700 w-max text-white shadow-lg mb-[-1px]">
              we are here
            </div>
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-stone-700"></div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-between w-full p-4 mb-8 text-sm text-stone-500 text-nowrap 
                   max-md:items-center md:flex-row"
      >
        <div className="flex gap-4 items-center">
          <p className="hover:text-stone-900 active:text-black cursor-pointer translation duration-250">
            2026 © Inspired by
          </p>
          <p className="hover:text-stone-900 active:text-black cursor-pointer translation duration-250 text-xs">
            MoreLikeCopied
          </p>
          <p className="hover:text-stone-900 active:text-black cursor-pointer translation duration-250">
            tolv.studio
          </p>
        </div>
        <div className="flex gap-8">
          <p className="hover:text-stone-900 active:text-black cursor-pointer translation duration-250">
            Terms & conditions
          </p>
          <p className="hover:text-stone-900 active:text-black cursor-pointer translation duration-250">
            Cookies
          </p>
          <p className="hover:text-stone-900 active:text-black cursor-pointer translation duration-250">
            Privacy policy
          </p>
        </div>
      </div>
    </footer>
  );
}
