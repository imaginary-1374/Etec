import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import useStopScroll from "@/hooks/useStopScroll";
import { CartContext } from "@/context/cartContext";
import { ProductsContext } from "@/context/productscontext";

import { MdOutlineVerifiedUser, MdKeyboardArrowDown } from "react-icons/md";
import { LiaBoxSolid } from "react-icons/lia";

import { RiCustomerServiceLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";

import Support from "./Support";

export default function AddToCart() {
  const [openSection, setOpenSection] = useState(null);
  const _scroll = useStopScroll(openSection);
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p.id === Number(id));
  const { addItem } = useContext(CartContext);
  const toggleSection = (section) =>
    setOpenSection(openSection === section ? null : section);

  const menuItems = [
    {
      id: "warranty",
      label: "warranty",
      icon: <MdOutlineVerifiedUser size={20} />,
    },
    {
      id: "shipping",
      label: "shipping & delivery",
      icon: <LiaBoxSolid size={20} />,
    },
    {
      id: "support",
      label: "support",
      icon: <RiCustomerServiceLine size={20} />,
    },
  ];
  return (
    <div className="flex flex-col gap-3 mt-4 w-full">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-stone-900">Availability:</span>
        <span className="text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
          In Stock
        </span>
      </div>
      <button
        onClick={() => addItem(product)}
        className="w-full bg-stone-900 text-white font-medium py-4 rounded-xl shadow-lg hover:bg-stone-800 active:scale-95 transition-all mt-2"
      >
        Add to Cart
      </button>

      <p className="text-stone-400 text-center text-xs px-4">
        Estimate delivery times: 3-6 days (International) Return within 45 days.
      </p>

      {/* Dropdown */}
      <ToastContainer />
      <ul className="divide-y divide-stone-200 mt-4">
        {menuItems.map((item) => (
          <li key={item.id} className="flex flex-col">
            <button
              onClick={() => toggleSection(item.id)}
              className="flex justify-between items-center text-stone-600 py-4 px-2 hover:bg-stone-50 transition-colors w-full"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <p className="first-letter:uppercase font-medium">
                  {item.label}
                </p>
              </div>
              <MdKeyboardArrowDown
                size={22}
                className={`transition-transform duration-300 ${openSection === item.id ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === item.id
                  ? "max-h-135 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-4 px-9 text-sm text-stone-500">
                <div>
                  {item.id === "warranty" && (
                    <p>
                      Etec offers a two-year manufacturer warranty on all new
                      headphones purchased from authorized retailers in most
                      countries. Refurbished products purchased from authorized
                      retailers are covered by a one-year manufacturer warranty.
                      If you believe your product is faulty and is within the
                      warranty period, please fill out this form to submit a
                      warranty claim here. After you’ve completed and submitted
                      the warranty claim form our customer service team will
                      proceed with your claim within two business days. If you
                      are required to return your product prior to approval, you
                      will receive an email with a prepaid return shipping
                      label. Please do not mail your product to etec without a
                      prepaid return label provided by Etec as this will delay
                      the claims process. If no further information is needed,
                      you’ll receive an approval confirmation email, followed by
                      a shipping confirmation email with a tracking number for
                      your replacement headphones once they have been shipped.
                      Please do not discard your faulty headphones until you
                      receive your replacement.
                    </p>
                  )}
                </div>
                <div>
                  {item.id === "shipping" && (
                    <p>
                      For all orders exceeding a value of 100USD shipping is
                      offered for free. Returns will be accepted for up to 10
                      days of Customer’s receipt or tracking number on unworn
                      items. You, as a Customer, are obliged to inform us via
                      email before you return the item. Otherwise, standard
                      shipping charges apply. Check out our delivery Terms &
                      Conditions for more details.
                    </p>
                  )}
                </div>
                <div className={`${openSection != "support" && " hidden "}`}>
                  {item.id === "support" && (
                    <Support setOpenSection={setOpenSection} />
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
