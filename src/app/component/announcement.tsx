import { FaPlus } from "react-icons/fa6";

export default function Anouce() {
  return (
    <main className="bg-[#000] w-full h-[38px] flex justify-center items-center px-4 relative">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <h3 className="text-white text-sm">
          Sign up and get 20% off your first order
        </h3>
        <button className="text-white ml-3 text-x5 sm :">
          Sign up Now
        </button>
      </div>

      {/* Right Icon */}
      <div className="text-white cursor-pointer hover:text-gray-300 hidden sm:block">
      <FaPlus  />
      </div>
   </main>
  );
}