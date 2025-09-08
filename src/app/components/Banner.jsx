import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="flex items-center gap-10 md:gap-14 px-4 md:px-0 lg:gap-20 flex-col-reverse lg:flex-row max-w-7xl mx-auto justify-between pt-8 md:pt-12">
      {/* left side  */}
      <div className="flex-1">
        <h2 className="text-3xl text-center lg:text-left font-bold md:text-4xl lg:text-5xl">
          Code Today ,<br /> Create Tomorrow
        </h2>

        {/* description + button grouped */}
        <div className="mt-6 flex flex-col items-center lg:items-start space-y-6">
          <p className="text-center lg:text-left leading-relaxed">
            At Syntax Six, we deliver modern, scalable, and user-friendly
            technology solutions designed to empower businesses. With creativity,
            collaboration, and cutting-edge tools, we turn ideas into
            reality—building the future together.
          </p>

          <Link
            href="/projects"
            className="bg-blue-600 py-3 px-8 flex items-center gap-3 rounded-full text-white font-medium hover:bg-blue-700 transition"
          >
            Explore Our Work <FaArrowRight/>
          </Link>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <img
          className="object-center w-full rounded-md"
          src="https://media.istockphoto.com/id/2167187210/photo/futuristic-digital-interface-with-floating-code-screens-on-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=lBTIegTQaXE0fFP0jAM227-j3T-bf2YXOortvJOWNLY="
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
