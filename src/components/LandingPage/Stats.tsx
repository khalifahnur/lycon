'use client';

import React, { useRef } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { motion, easeOut } from 'framer-motion';

export default function Stats() {
  //const { ref, inView } = useInView({ triggerOnce: true });
  const sectionRef = useRef(null);

  // Animation variants
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { staggerChildren: 0.3 },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 40 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  // };

  return (
    <section
      ref={sectionRef}
      className='bg-[#1A1A1A] text-white py-30 relative overflow-hidden'
    >
      {/* <div className='container mx-auto px-4'>
        <motion.div
          className='flex flex-col lg:flex-row justify-between items-center gap-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className='w-full lg:w-1/2 text-center'
            variants={itemVariants}
          >
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
              <span className='text-emerald-500'>Sports</span> and{' '}
              <span className='text-emerald-500'>community</span> development are
              just the start.
            </h3>
            <p className='text-sm sm:text-base lg:text-lg mb-6'>
              At Lycan, we’re not just investors — we’re partners in growth.
              From strengthening Murang’a Seal Football Club to building St.
              Sebastian Park and developing St. Sebastian Academy, we work side
              by side with communities to create opportunities that last.
            </p>
            <Button className='bg-blue-500 text-white px-4 sm:px-6 py-2 rounded'>
              <p>Learn more</p>
            </Button>
          </motion.div>

          <motion.div
            ref={ref}
            className='w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6'
            variants={containerVariants}
          >
            <motion.div className='text-center' variants={itemVariants}>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400'>
                {inView && <CountUp end={300} duration={3} />}+
              </h2>
              <p className='text-gray-400 text-xs sm:text-sm lg:text-base'>
                Events
              </p>
            </motion.div>
            <motion.div className='text-center' variants={itemVariants}>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400'>
                {inView && <CountUp end={2} duration={3} />}M+
              </h2>
              <p className='text-gray-400 text-xs sm:text-sm lg:text-base'>
                square feet under management
              </p>
            </motion.div>
            <motion.div className='text-center' variants={itemVariants}>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400'>
                {inView && <CountUp end={90} duration={3} />} day
              </h2>
              <p className='text-gray-400 text-xs sm:text-sm lg:text-base'>
                buildout turnaround
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div> */}

      {/* Decorative SVG */}
      <div className='absolute bottom-0 left-0 w-[10rem] sm:w-[15rem] lg:w-[20rem] hidden lg:block'>
        <svg
          className='object-contain w-full h-full'
          width='247'
          height='112'
          viewBox='0 0 247 112'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M-11.3078 6.83448C-3.12783 -2.27816 11.1278 -2.27816 19.3077 6.83449C24.4754 12.5914 32.4242 14.9625 39.88 12.963C51.566 9.82906 63.4063 17.4592 65.4417 29.4356L65.5449 30.0434C66.8494 37.7191 72.2586 44.0482 79.6144 46.5056C91.1709 50.3664 97.0428 63.262 92.3927 74.5686L92.2082 75.0172C89.231 82.2562 90.446 90.5979 95.3169 96.7141C102.985 106.342 101.029 120.563 90.9686 127.628C84.5939 132.103 81.1633 139.72 82.0249 147.484L82.0971 148.135C83.4388 160.226 74.2213 170.894 62.1147 171.261C54.3889 171.496 47.4341 176.027 44.0708 183.017L43.9048 183.362C38.625 194.336 25.0647 198.328 14.7229 191.954C8.14422 187.898 -0.144226 187.898 -6.72287 191.954C-17.0647 198.328 -30.6251 194.336 -35.9049 183.362L-36.0708 183.017C-39.4341 176.027 -46.3889 171.496 -54.1147 171.261C-66.2213 170.894 -75.4388 160.226 -74.0971 148.135L-74.0249 147.484C-73.1633 139.72 -76.5939 132.103 -82.9685 127.628C-93.0292 120.563 -94.9848 106.342 -87.3169 96.7141C-82.446 90.5979 -81.231 82.2562 -84.2082 75.0172L-84.3927 74.5686C-89.0428 63.262 -83.1709 50.3664 -71.6144 46.5056C-64.2586 44.0482 -58.8494 37.7191 -57.545 30.0434L-57.4417 29.4356C-55.4063 17.4592 -43.566 9.82906 -31.88 12.963C-24.4242 14.9625 -16.4754 12.5914 -11.3078 6.83448Z'
            fill='#FF5354'
          />
          <path
            d='M138.585 9C156.152 9.00028 171.149 37.6772 177.085 78.0713C217.486 84.0061 246.169 99.0053 246.169 116.574C246.169 134.143 217.487 149.141 177.088 155.076C171.154 195.482 156.155 224.169 138.585 224.169C121.015 224.169 106.014 195.482 100.08 155.076C59.6811 149.141 31 134.143 31 116.574C31.0001 99.0055 59.6825 84.0062 100.083 78.0713C106.019 37.6769 121.018 9 138.585 9Z'
            fill='#FBEB0F'
          />
          <path
            d='M90.8975 79.6133C89.8905 85.6064 91.4522 91.8605 95.3174 96.7139C102.985 106.342 101.029 120.564 90.9688 127.628C84.5942 132.104 81.1629 139.72 82.0244 147.484L82.0967 148.135C82.2298 149.335 82.2568 150.52 82.1895 151.684C51.4734 144.425 31 131.417 31 116.574C31.0001 100.369 55.4037 86.3492 90.8975 79.6133Z'
            fill='#FF9D5F'
          />
        </svg>
      </div>
    </section>
  );
}
