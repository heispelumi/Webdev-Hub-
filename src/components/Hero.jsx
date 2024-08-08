// import React, { useState, useEffect } from 'react';
// import imagehero from '../assets/imagehero.jpeg';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(0);
//   const [counter3, setCounter3] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter1((prev) => Math.min(prev + 1, 100));
//       setCounter2((prev) => Math.min(prev + 1, 56));
//       setCounter3((prev) => Math.min(prev + 1, 14));
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='relative'>
//       <motion.div
//         className='h-[600px] sm:h-[600px] shadow shadow-xl flex items-center bg-white-800 pt-6'
//         initial={{ y: 50, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className='container mx-auto flex flex-col items-center justify-between px-4 sm:px-0'>
//           <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
//             <div className='flex w-full px-4 md:px-8 flex-col justify-center text-center sm:text-left'>
//               <h1 className='text-4xl leading-tight md:leading-none py-1 text-violet-950 md:text-6xl sm:text-3xl'>
//                 Elevate Your Business with Custom-Built Apps
//               </h1>
//               <p className='text-xl py-1 text-bold leading-relaxed'>
//                 Transforming Ideas into Innovation
//               </p>
//               <div className='sm:flex py-2 hidden justify-center sm:justify-start space-x-3 sm:space-x-6'>
//                 <button className='bg-gradient-to-r from-[#3850DD] to-[#C084FC] text-white border rounded-md px-4 py-2 sm:px-6 sm:py-4'>
//                   Get Started
//                 </button>
//                 <button className='bg-purple-400 text-white border rounded-md px-4 py-2 sm:px-6 sm:py-4'>
//                   Login
//                 </button>
//               </div>
//             </div>
//             <div className='flex justify-center items-center'>
//               <img className='sm:w-full sm:h-full object-cover' src={imagehero} alt="Hero" />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//       <motion.div
//         className='absolute left-0 right-0 hidden md:flex md:-bottom-12 sm:-bottom-8 mx-4 sm:mx-auto sm:max-w-screen-md md:max-w-screen-lg bg-slate-300 text-black border rounded-md dark:text-white-70 shadow-lg py-4'
//         initial={{ y: 30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className='container mx-auto'>
//           <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 py-4'>
//             <div className='text-center'>
//               <p className='text-2xl font-bold text-violet-950'>{counter1}+</p>
//               <p className='text-sm text-gray-600'>Projects Completed</p>
//             </div>
//             <div className='text-center'>
//               <p className='text-2xl font-bold text-violet-950'>{counter2}+</p>
//               <p className='text-sm text-gray-600'>Clients</p>
//             </div>
//             <div className='text-center'>
//               <p className='text-2xl font-bold text-violet-950'>{counter3}</p>
//               <p className='text-sm text-gray-600'>Awards Won</p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;




import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import imagehero from '../assets/imagehero.jpeg';

const Hero = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter1((prev) => Math.min(prev + 1, 100));
      setCounter2((prev) => Math.min(prev + 1, 56));
      setCounter3((prev) => Math.min(prev + 1, 14));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative'>
      <motion.div
        className='h-[600px] sm:h-[600px] shadow shadow-xl flex items-center bg-white-800 pt-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='container mx-auto flex flex-col items-center justify-between px-4 sm:px-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='flex w-full px-4 md:px-8 flex-col justify-center text-center sm:text-left'>
              <h1 className='text-4xl leading-tight md:leading-none py-1 text-violet-950 md:text-6xl sm:text-3xl'>
                Elevate Your Business with Custom-Built Apps
              </h1>
              <p className='text-xl py-1 text-bold leading-relaxed'>
                Transforming Ideas into Innovation
              </p>
              <div className='sm:flex py-2 hidden justify-center sm:justify-start space-x-3 sm:space-x-6'>
                <button className='bg-gradient-to-r from-[#3850DD] to-[#C084FC] text-white border rounded-md px-4 py-2 sm:px-6 sm:py-4'>
                  Get Started
                </button>
                <button className='bg-purple-400 text-white border rounded-md px-4 py-2 sm:px-6 sm:py-4'>
                  Login
                </button>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <img className='sm:w-full sm:h-full object-cover' src={imagehero} alt="Hero" />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className='absolute left-0 right-0 hidden md:flex md:-bottom-12 sm:-bottom-8 mx-4 sm:mx-auto sm:max-w-screen-md md:max-w-screen-lg bg-slate-300 text-black border rounded-md dark:text-white-70 shadow-lg py-4'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 py-4'>
            <div className='text-center'>
              <p className='text-2xl font-bold text-violet-950'>{counter1}+</p>
              <p className='text-sm text-gray-600'>Projects Completed</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-violet-950'>{counter2}+</p>
              <p className='text-sm text-gray-600'>Clients</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-violet-950'>{counter3}</p>
              <p className='text-sm text-gray-600'>Awards Won</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;


