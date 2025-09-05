"use client";

import Image from "next/image";
import React from "react";
import { motion, easeOut } from "framer-motion";

export default function Service() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section className="bg-[#FAFAFA] relative py-6 sm:py-8 lg:py-10 overflow-hidden">
      <div className="container relative mx-auto flex justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex max-lg:flex-col max-lg:pb-[3rem] justify-between gap-6 sm:gap-8 lg:gap-[4rem] w-full max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left Content Section */}
          <motion.div
            className="flex flex-col justify-start gap-4 sm:gap-6 lg:gap-[1rem] w-full lg:!w-[30.5rem] transition-top1 lg:pb-[5rem]"
            variants={itemVariants}
          >
            {/* <h3 className="text-black text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
              What We Do
            </h3> */}

            <motion.div
              className="flex flex-col items-start gap-4 sm:gap-5 lg:gap-[1.25rem]"
              variants={containerVariants}
            >
              <motion.div className="rich-text" variants={itemVariants}>
                <p className="text-sm sm:text-base lg:text-[1rem] xl:text-[1.125rem] tracking-[-0.023rem] text-[#393939] leading-6 sm:leading-7 lg:leading-[1.8rem] font-dm">
                  <span style={{ fontWeight: 400 }}>
                    Gain access to updates, strategies, and expert perspectives
                    on our investments — from Murang&apos;a Seal Football Club
                    to St. Sebastian Park and the upcoming St. Sebastian
                    Academy. Explore how Lycan is driving impact through sports,
                    events, and education.
                  </span>
                </p>
              </motion.div>

              {/* <motion.div variants={itemVariants}>
                <Button className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded">
                  <p>Explore Services</p>
                </Button>
              </motion.div> */}
            </motion.div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            className="relative w-full lg:w-[46.5rem]"
            variants={containerVariants}
          >
            <div className="recent-articles-wrapper flex flex-col gap-6 sm:gap-8 lg:gap-[1.438rem]">
              {/* Entries */}
              {[
                {
                  tag: "🎟️ Muranga Seal Football Club",
                  bg: "#fbeb0f",
                  title:
                    "We are transforming how fans connect with their club. The MSeal digital membership system offers:",
                  desc: "Easy access to match tickets. Exclusive membership benefits. Secure and reliable digital transactions. A stronger bond between fans and their club.",
                  imgAlt: "Muranga Seal Football Club",
                  descUrl: "#",
                  imgUrl: "https://imgur.com/OxBMFq0.jpeg",
                },
                {
                  tag: "🏟️ St. Sebastian Park",
                  bg: "#ff5354",
                  title:
                    "Welcome to St Sebastian Park, a dedicated 100-room hospitality and conference center within the 9,000-seat stadium complex, unlocking East Africa’s growing sports tourism and events market.",
                  desc: "The Park creates a year-round revenue engine, combining sports, business, and entertainment under one destination. By integrating accommodation ... ",
                  imgAlt: "St. Sebastian Park",
                  descUrl: "/lycan-international/st-sebastian-park",
                  imgUrl: "https://imgur.com/mWiZyBs.jpeg",
                },
                {
                  tag: "📚 St. Sebastian Academy (Coming Soon)",
                  bg: "#ff5354",
                  title:
                    "St. Sebastian Sports Academy is a pioneering residential institution that fills a critical gap in East Africa's youth development landscape.",
                  desc: "We offer a fully integrated model combining elite football training, accredited academic instruction, wellness services, and commercial event hosting.",
                  imgAlt: "St. Sebastian Sports Academy",
                  descUrl: "/lycan-international/st-sebastian-academy",
                  imgUrl: "https://imgur.com/tKsCi0g.jpeg",
                },
              ].map((entry, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={itemVariants}
                >
                  <a
                    className="absolute w-full h-full top-0 left-0 z-[2]"
                    href={entry.descUrl}
                  ></a>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[0.5rem] xl:gap-[1rem] w-full relative group">
                      <div className="flex items-center gap-2 sm:gap-4 lg:gap-[1rem] flex-wrap">
                        <span
                          className="text-xs sm:text-sm lg:text-[0.875rem] font-semibold rounded-full text-black px-2 py-1 sm:px-3 sm:py-1.5 lg:p-[0.25rem_0.5rem] leading-tight whitespace-nowrap"
                          style={{ backgroundColor: entry.bg }}
                        >
                          {entry.tag}
                        </span>
                        <span className="text-xs sm:text-sm lg:text-[0.875rem] font-semibold">
                          New
                        </span>
                      </div>

                      <div className="flex justify-between items-start lg:items-end w-full">
                        <div className="flex-1 lg:w-[30rem] flex flex-col gap-3 sm:gap-4 lg:gap-[1rem] pr-4 lg:pr-0">
                          <h6 className="recent-articles-wrapper__title transition-[color] duration-500 ease-out text-base sm:text-lg lg:text-xl font-semibold text-black">
                            {entry.title}
                          </h6>
                          <p className="tracking-[-0.05rem] text-sm sm:text-base lg:text-[1rem] text-[#393939] leading-relaxed">
                            {entry.desc}
                          </p>
                        </div>

                        {/* Arrow */}
                        <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[0.75rem] lg:h-[0.75rem] flex-shrink-0">
                          <svg
                            className="object-contain w-full h-full"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.49411 1L12 7.00005M12 7.00005L6.49411 13M12 7.00005H0"
                              stroke="black"
                              strokeWidth="1.6"
                            ></path>
                          </svg>
                        </div>

                        {/* Hover Image */}
                        <div className="hidden lg:block absolute top-[-2.25rem] rounded-[0.25rem] overflow-hidden right-0 group-hover:opacity-100 opacity-0 mt-[2rem] group-hover:mt-0 transition-all duration-500 ease-out w-[13.5rem] h-auto">
                          <Image
                            className="object-cover w-full h-full"
                            src={entry.imgUrl}
                            alt={entry.imgAlt}
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="h-[1px] w-full mt-6 lg:mt-[1.438rem]"
                    style={{ background: "rgba(0, 0, 0, 0.50)" }}
                  ></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-[10rem] sm:w-[15rem] lg:w-[20rem] hidden lg:block">
        <svg
          className="object-contain w-full h-full"
          width="247"
          height="112"
          viewBox="0 0 247 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-11.3078 6.83448C-3.12783 -2.27816 11.1278 -2.27816 19.3077 6.83449C24.4754 12.5914 32.4242 14.9625 39.88 12.963C51.566 9.82906 63.4063 17.4592 65.4417 29.4356L65.5449 30.0434C66.8494 37.7191 72.2586 44.0482 79.6144 46.5056C91.1709 50.3664 97.0428 63.262 92.3927 74.5686L92.2082 75.0172C89.231 82.2562 90.446 90.5979 95.3169 96.7141C102.985 106.342 101.029 120.563 90.9686 127.628C84.5939 132.103 81.1633 139.72 82.0249 147.484L82.0971 148.135C83.4388 160.226 74.2213 170.894 62.1147 171.261C54.3889 171.496 47.4341 176.027 44.0708 183.017L43.9048 183.362C38.625 194.336 25.0647 198.328 14.7229 191.954C8.14422 187.898 -0.144226 187.898 -6.72287 191.954C-17.0647 198.328 -30.6251 194.336 -35.9049 183.362L-36.0708 183.017C-39.4341 176.027 -46.3889 171.496 -54.1147 171.261C-66.2213 170.894 -75.4388 160.226 -74.0971 148.135L-74.0249 147.484C-73.1633 139.72 -76.5939 132.103 -82.9685 127.628C-93.0292 120.563 -94.9848 106.342 -87.3169 96.7141C-82.446 90.5979 -81.231 82.2562 -84.2082 75.0172L-84.3927 74.5686C-89.0428 63.262 -83.1709 50.3664 -71.6144 46.5056C-64.2586 44.0482 -58.8494 37.7191 -57.545 30.0434L-57.4417 29.4356C-55.4063 17.4592 -43.566 9.82906 -31.88 12.963C-24.4242 14.9625 -16.4754 12.5914 -11.3078 6.83448Z"
            fill="#FF5354"
          />
          <path
            d="M138.585 9C156.152 9.00028 171.149 37.6772 177.085 78.0713C217.486 84.0061 246.169 99.0053 246.169 116.574C246.169 134.143 217.487 149.141 177.088 155.076C171.154 195.482 156.155 224.169 138.585 224.169C121.015 224.169 106.014 195.482 100.08 155.076C59.6811 149.141 31 134.143 31 116.574C31.0001 99.0055 59.6825 84.0062 100.083 78.0713C106.019 37.6769 121.018 9 138.585 9Z"
            fill="#FBEB0F"
          />
          <path
            d="M90.8975 79.6133C89.8905 85.6064 91.4522 91.8605 95.3174 96.7139C102.985 106.342 101.029 120.564 90.9688 127.628C84.5942 132.104 81.1629 139.72 82.0244 147.484L82.0967 148.135C82.2298 149.335 82.2568 150.52 82.1895 151.684C51.4734 144.425 31 131.417 31 116.574C31.0001 100.369 55.4037 86.3492 90.8975 79.6133Z"
            fill="#FF9D5F"
          />
        </svg>
      </div>
    </section>
  );
}
