import Image from "next/image";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow-md relative flex flex-col md:flex-row">
      <Image
        src="/images/properties/f1.jpg"
        alt=""
        className="w-full h-auto rounded-t-xl md:rounded-tr-none md:rounded-l-xl md:w-2/5"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold">Seaside Retreat</h3>
        <div className="text-gray-600 mb-4">Condo</div>
        <h3 className="absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          $2,500/wk
        </h3>
        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed /> 4<span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath /> 3<span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined />
            2,800 <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p>
            <FaMoneyBill /> Nightly
          </p>
          <p>
            <FaMoneyBill /> Weekly
          </p>
        </div>

        <div className="border border-gray-200 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="text-lg text-orange-700" />
            <span className="text-orange-700"> Boston MA </span>
          </div>
          <a
            href="property.html"
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}
