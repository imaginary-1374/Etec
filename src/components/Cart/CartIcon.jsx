import { useContext } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { SideBar } from "./SideBar";
import { CartContext } from "@/context/CartContext";

export default function CartIcon() {
  const { totalCount } = useContext(CartContext);

  return (
    <div className="fixed bottom-8 right-6 flex-none z-50 md:bottom-12 md:right-8">
      <SideBar
        trigger={
          <div className="relative inline-block">
            <div
              className="bg-stone-900 rounded-full p-3 shadow-lg cursor-pointer
                         md:p-4 hover:bg-stone-800 transition-colors duration-300"
            >
              <RiShoppingCartLine className="w-6 h-6 text-white md:w-7 md:h-7" />
            </div>

            {totalCount > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 min-w-[1.25rem] h-5
                           bg-red-500 text-white text-xs font-bold
                           rounded-full flex items-center justify-center px-1
                           pointer-events-none"
              >
                {totalCount > 99 ? "99+" : totalCount}
              </span>
            )}
          </div>
        }
      />
    </div>
  );
}
