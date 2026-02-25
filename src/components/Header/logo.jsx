import { NavLink } from "react-router-dom";
import logo_img from "/logo.png";

export default function Logo() {
  return (
    <NavLink to="/">
      <div>
        <div className="flex items-center justify-center cursor-pointer">
          <span
            className="font-bold text-3xl
                       md:text-4xl"
          >
            <img className="w-12" src={logo_img} alt="Λ" />
          </span>
          <span
            className="font-semibold text-3xl
                       md:text-2xl"
          >
            etec
          </span>
        </div>
      </div>
    </NavLink>
  );
}
