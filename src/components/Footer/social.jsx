import Logo from "../Header/logo";

import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Social() {
  return (
    <div>
      <div className="flex flex-col justify-start items-start gap-6 border-b border-stone-300 pb-8">
        <Logo />
        <p className=" text-stone-800">
          Selling premium products, designed to elevate your everyday experience
        </p>
      </div>
      <div className="flex gap-4 py-4">
        <div
          className="flex items-center justify-center w-10 h-10 bg-stone-300 rounded-full cursor-pointer
                        hover:bg-[#1877F2] hover:text-white active:bg-[#1877F2] active:text-white transition-all duration-300 "
        >
          <FaFacebookF />
        </div>
        <div
          className="flex items-center justify-center w-10 h-10 bg-stone-300 rounded-full cursor-pointer
                        hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white
                        active:bg-gradient-to-tr active:from-[#f9ce34] active:via-[#ee2a7b] active:to-[#6228d7] active:text-white transition duration-300 "
        >
          <AiFillInstagram />
        </div>
        <div
          className="flex items-center justify-center w-10 h-10 bg-stone-300 rounded-full cursor-pointer
                        hover:bg-[#0077b5] hover:text-white active:bg-[#0077b5] active:text-white transition-all duration-300 "
        >
          <FaLinkedin />
        </div>
        <div
          className="flex items-center justify-center w-10 h-10 bg-stone-300 rounded-full cursor-pointer
                        hover:bg-[#000] hover:text-white active:bg-[#000] active:text-white transition-all duration-300 "
        >
          <FaXTwitter />
        </div>
      </div>
    </div>
  );
}
