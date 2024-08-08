// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion'; // Import motion from Framer Motion
// import bannerimage1 from '../assets/bannerimage1.jpeg';
// import bannerImage2 from '../assets/bannerImage2.jpeg';

// const Banner = () => {
//   return (
//     <div className='bg-violet-400 text-white'>
//       {/* Desktop View */}
//       <div className='container mx-auto hidden sm:block py-24'>
//         {/* First Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'
//         >
//           {/* Text Section */}
//           <div className='flex flex-col justify-center p-6 md:p-12'>
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className='text-3xl md:text-4xl font-bold mb-4'
//             >
//               We Build Apps That Get Trending On Appstore
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className='text-lg text-slate-700 mb-6'
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className='space-y-4 text-slate-100'
//             >
//               <Link to='#'>
//                 Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
//               </Link>
//               <Link to='#'>
//                 Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
//               </Link>
//               <Link to='#'>
//                 Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
//               </Link>
//             </motion.div>
//           </div>
//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className='flex justify-center'
//           >
//             <img className='w-[600px] h-full object-cover rounded-lg shadow-lg' src={bannerImage2} alt="Banner" />
//           </motion.div>
//         </motion.div>

//         {/* Second Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className='grid grid-cols-1 md:grid-cols-2 gap-12'
//         >
//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className='flex justify-center'
//           >
//             <img className='w-[600px] h-full object-cover rounded-lg shadow-lg' src={bannerimage1} alt="Banner" />
//           </motion.div>
//           {/* Text Section */}
//           <div className='flex flex-col justify-center p-6 md:p-12'>
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className='text-3xl md:text-4xl font-bold mb-4'
//             >
//               We Build Apps That Get Trending On Appstore
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className='text-lg text-slate-200 mb-6'
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className='space-y-4 text-slate-100'
//             >
//               <Link to='#'>
//                 Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
//               </Link>
//               <Link to='#'>
//                 Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
//               </Link>
//               <Link to='#'>
//                 Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
//               </Link>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Mobile View */}
//       <div className='container mx-auto block sm:hidden py-16'>
//         {/* First Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className='flex flex-col items-center gap-8 mb-8'
//         >
//           {/* Text Section */}
//           <div className='flex flex-col items-center text-center px-6'>
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className='text-2xl font-bold mb-4'
//             >
//               We Build Apps That Get Trending On Appstore
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className='text-base text-slate-800 mb-4'
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className='space-y-4'
//             >
//               <Link to='#' className='text-slate-100'>
//                 Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
//               </Link>
//               <Link to='#' className='text-slate-100'>
//                 Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
//               </Link>
//               <Link to='#' className='text-slate-100'>
//                 Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
//               </Link>
//             </motion.div>
//           </div>
//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className='w-full flex justify-center'
//           >
//             <img className='w-full h-full object-cover rounded-lg shadow-lg' src={bannerImage2} alt="Banner" />
//           </motion.div>
//         </motion.div>

//         {/* Second Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className='flex flex-col items-center gap-8'
//         >
//           {/* Text Section */}
//           <div className='flex flex-col items-center text-center px-6'>
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className='text-2xl font-bold mb-4'
//             >
//               We Build Apps That Get Trending On Appstore
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className='text-base text-slate-700 mb-4'
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className='space-y-4 text-slate-100'
//             >
//               <Link to='#' className='text-slate-100'>
//                 Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
//               </Link>
//               <Link to='#' className='text-slate-100'>
//                 Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
//               </Link>
//             </motion.div>
//           </div>
//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className='w-full flex justify-center'
//           >
//             <img className='w-full h-full object-cover rounded-lg shadow-lg' src={bannerimage1} alt="Banner" />
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import bannerimage1 from '../assets/bannerimage1.jpeg';
import bannerImage2 from '../assets/bannerImage2.jpeg';

const Banner = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='bg-violet-400 text-white'>
      {/* Desktop View */}
      <div className='container mx-auto hidden sm:block py-24'>
        {/* First Section */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={textAnimation}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'
        >
          {/* Text Section */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={textAnimation}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex flex-col justify-center p-6 md:p-12'
          >
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>We Build Apps That Get Trending On Appstore</h1>
            <p className='text-lg text-slate-700 mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
            </p>
            <div className='space-y-4 text-slate-100'>
              <Link to='#'>
                Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
              </Link>
              <Link to='#'>
                Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
              </Link>
              <Link to='#'>
                Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
              </Link>
            </div>
          </motion.div>
          {/* Image Section */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={imageAnimation}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='flex justify-center'
          >
            <img className='w-[600px] h-full object-cover rounded-lg shadow-lg' src={bannerImage2} alt="Banner" />
          </motion.div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={textAnimation}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-12'
        >
          {/* Image Section */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={imageAnimation}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='flex justify-center'
          >
            <img className='w-[600px] h-full object-cover rounded-lg shadow-lg' src={bannerimage1} alt="Banner" />
          </motion.div>
          {/* Text Section */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={textAnimation}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex flex-col justify-center p-6 md:p-12'
          >
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>We Build Apps That Get Trending On Appstore</h1>
            <p className='text-lg text-slate-200 mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
            </p>
            <div className='space-y-4 text-slate-100'>
              <Link to='#'>
                Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
              </Link>
              <Link to='#'>
                Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
              </Link>
              <Link to='#'>
                Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className='container mx-auto block sm:hidden py-16'>
        {/* First Section */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={textAnimation}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-8 mb-8'
        >
          {/* Text Section */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={textAnimation}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex flex-col items-center text-center px-6'
          >
            <h1 className='text-2xl font-bold mb-4'>We Build Apps That Get Trending On Appstore</h1>
            <p className='text-base text-slate-800 mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
            </p>
            <div className='space-y-4'>
              <Link to='#' className='text-slate-100'>
                Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
              </Link>
              <Link to='#' className='text-slate-100'>
                Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
              </Link>
              <Link to='#' className='text-slate-100'>
                Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
              </Link>
            </div>
          </motion.div>
          {/* Image Section */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={imageAnimation}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='w-full flex justify-center'
          >
            <img className='w-full h-full object-cover rounded-lg shadow-lg' src={bannerImage2} alt="Banner" />
          </motion.div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={textAnimation}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-8'
        >
          {/* Text Section */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={textAnimation}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex flex-col items-center text-center px-6'
          >
            <h1 className='text-2xl font-bold mb-4'>We Build Apps That Get Trending On Appstore</h1>
            <p className='text-base text-slate-700 mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
            </p>
            <div className='space-y-4 text-slate-100'>
              <Link to='#' className='text-slate-100'>
                Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
              </Link>
              <Link to='#' className='text-slate-100'>
                Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
              </Link>
            </div>
          </motion.div>
          {/* Image Section */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={imageAnimation}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='w-full flex justify-center'
          >
            <img className='w-full h-full object-cover rounded-lg shadow-lg' src={bannerimage1} alt="Banner" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;








