import { PiTruckLight } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { ProductsContext } from "../../context/productscontext";
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
  const allImages = [product.images.lifestyle].slice(0, 4);
  return (
    <div>
      <div className="flex flex-col md:flex-col-reverse w-full gap-6">
        {/* img*/}
        <img src="" alt="zzzzzzzzzzzzzz" className="w-full object-cover" />
        {/* features */}
        <div className="flex flex-col md:flex-row flex-1 bg-stone-100 rounded-3xl p-6 gap-8 mt-12">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center justify-center text-center md:flex-row md:items-start md:text-left gap-4 flex-1"
            >
              {/* icon*/}
              <div className="bg-white rounded-xl p-4 w-fit mb-4 shadow-sm">
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
      <div>
        {allImages.map((img, index) => (
          <img
            key={index}
            src={getImagePath(product.folderId, img)}
            alt=""
            className="w-20 h-auto md:w-full aspect-square object-cover rounded-lg cursor-pointer transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}
