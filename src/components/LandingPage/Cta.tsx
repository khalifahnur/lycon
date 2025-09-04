import React from "react";

export default function Cta() {
  return (
    <section className="bg-[#FAFAFA] py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div
          className="relative flex flex-col items-center justify-center text-center 
          bg-[#3636FF] rounded-lg overflow-hidden px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 lg:py-20 w-full max-w-5xl"
        >
          {/* Left SVG */}
          <div className="absolute left-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-40 h-20 sm:h-24 md:h-32 lg:h-40 bg-[url('/assets/cta-l-m.svg')] bg-no-repeat bg-contain mix-blend-multiply"></div>

          {/* Right SVG */}
          <div className="absolute right-0 bottom-0 w-0 sm:w-0 md:w-32 lg:w-45 h-20 sm:h-0 md:h-32 lg:h-100 bg-[url('/assets/cta-r-m.svg')] bg-no-repeat bg-contain mix-blend-multiply"></div>

          {/* Text */}
          <div className="max-w-3xl flex flex-col items-center gap-4 sm:gap-6">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Let’s elevate your game – and your community’s future.
            </h3>

            <p className="text-white text-sm sm:text-base md:text-lg opacity-90 max-w-2xl">
              Partner with Lycan to unlock opportunities in sports, events, and
              education. With innovation, support, and a vision for growth,
              we’re building pathways that empower talent, inspire fans, and
              strengthen communities.
            </p>

            <a
              href="#"
              className="bg-white text-black px-4 sm:px-6 py-2 sm:py-2 rounded-md font-medium shadow hover:bg-gray-100 transition text-sm sm:text-base"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}