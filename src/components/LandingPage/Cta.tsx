import React from "react";

export default function Cta() {
  return (
    <section className="playfair bg-[#FAFAFA] py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div
          className="relative flex flex-col items-center justify-center text-center 
          bg-blue-500 rounded-lg overflow-hidden px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 lg:py-20 w-full max-w-5xl"
        >
          <div className="absolute left-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-40 h-20 sm:h-24 md:h-32 lg:h-40 bg-[url('/assets/cta-l-m.svg')] bg-no-repeat bg-contain mix-blend-multiply"></div>
          <div className="max-w-3xl flex flex-col items-center gap-4 sm:gap-6">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
              Join us in building the future of sports and education in East Africa.
            </h3>

            <p className="text-white text-sm sm:text-base md:text-lg opacity-90 max-w-2xl">
              This is more than infrastructure—it’s an investment in shaping Africa’s next generation of athletes, leaders, and global citizens. With a proven leadership team, diversified revenue base, and a clear path to profitability, the project delivers both strong financial returns and lasting social impact. 
            </p>

            <p className="font-bold">Investment discussions are open.</p>
            <a
              href="/lycan-international/contact-form"
              className="bg-white text-black px-4 sm:px-6 py-2 sm:py-2 rounded-md font-medium shadow hover:bg-gray-100 transition text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}