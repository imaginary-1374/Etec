import { RiShoppingCartLine } from "react-icons/ri";
import { SideBar } from "./SideBar";

export default function CartIcon() {
  return (
    <div className="fixed bottom-8 right-6 flex-none z-50 md:bottom-12 md:right-8">
      <SideBar
        trigger={
          <div
            className="bg-stone-900 rounded-full p-3 shadow-lg cursor-pointer
                       md:p-4 hover:bg-stone-800 transition-colors duration-300"
          >
            <RiShoppingCartLine className="w-6 h-6 text-white md:w-7 md:h-7" />
          </div>
        }
      />
    </div>
  );
}
