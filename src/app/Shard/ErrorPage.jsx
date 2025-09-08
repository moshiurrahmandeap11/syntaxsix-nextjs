import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/Animation.json";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center  justify-center h-screen text-center bg-gray-100 p-4">
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-72 md:w-96"
      />

      <h1 className="mt-4 text-3xl md:text-4xl font-bold text-red-500">
        Oops! Page Not Found
      </h1>

      <p className="mt-2 text-gray-600 text-base md:text-lg">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-4 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition-colors"
      >
        <AiOutlineArrowLeft size={18} /> Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
