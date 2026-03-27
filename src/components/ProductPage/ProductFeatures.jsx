import { PiTruckLight } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { MdBrokenImage } from "react-icons/md";

import { ProductsContext } from "../../context/ProductsContext";
import getImagePath from "../../utils/helpers";
import { useParams } from "react-router-dom";
import { useContext } from "react";
export default function ProductFeatures() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p.id === Number(id));

  const features = [
    {
      label: "Free Shipping",
      feature: "$24+ orders ship free",
      icon: <PiTruckLight size={30} />,
    },
    {
      label: "Secure Payments",
      feature: "Trusted payment options",
      icon: <CiCreditCard1 size={30} />,
    },
    {
      label: "45 Days Free Return",
      feature: "Easy, risk-free returns",
      icon: <HiArrowUturnLeft size={30} />,
    },
  ];
  const mainLifestyle = product.images.lifestyle.main;

  const sec = product.images.lifestyle.secondary || [];

  const secLifestyle = [...sec, null, null, null].slice(0, 3);

  return (
    <div className="mt-12 space-y-6">
      <div className="flex flex-col md:flex-col-reverse w-full gap-6">
        {/* main img */}
        <div
          className={`h-80 md:h-150 w-full rounded-2xl overflow-hidden flex items-center justify-center
            ${mainLifestyle == null ? "animate-pulse bg-gray-200" : ""}`}
        >
          {mainLifestyle ? (
            <img
              src={getImagePath(product.category, mainLifestyle, "in products")}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <MdBrokenImage size={40} className="text-gray-600 animate-pulse" />
          )}
        </div>

        {/* features */}
        <div className="flex flex-col md:flex-row flex-1 bg-stone-100 rounded-3xl p-6 gap-8">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center justify-center text-center md:flex-row md:items-start md:text-left gap-4 flex-1"
            >
              <div className="bg-white rounded-xl p-4 w-fit shadow-sm">
                {f.icon}
              </div>
              <div className="space-y-2 md:pt-1">
                <p className="font-bold text-stone-800">{f.label}</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {f.feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Images */}
      <div>
        <div className="flex flex-col md:flex-row gap-6">
          {secLifestyle.map((image, index) => (
            <div key={index}>
              <div
                className={`md:flex-1 h-80 rounded-2xl overflow-hidden flex items-center justify-center 
              ${!image ? "animate-pulse bg-gray-200" : "bg-gray-100"}`}
              >
                {image ? (
                  <img
                    src={getImagePath(product.category, image, "in products")}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <MdBrokenImage
                    size={40}
                    className="text-gray-600 animate-pulse"
                  />
                )}
              </div>
              <div className="mt-2 space-y-4 px-1">
                <h1 className="text-2xl font-bold tracking-tighter text-neutral-900 leading-none">
                  {product.lifestyletext.headers.at(index)}
                </h1>

                <p className="text-base text-neutral-500 font-medium tracking-tighter leading-tight">
                  {product.lifestyletext.p.at(index)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
