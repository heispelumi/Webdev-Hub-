
// import React from 'react';

// const Banner2 = () => {
//   return (
//     <div className='container bg-white w-full max-w-[100%] h-full sm:overflow-x-hidden  py-8 md:pt-[90px]'>
//       <div className='flex flex-col md:flex-row items-center gap-8'>
//         {/* Video Section */}
//         <div className='w-full md:px-8 md:w-1/2'>
//           <iframe
//             className='aspect-video w-full'
//             src="https://www.youtube.com/embed/sO4te2QNsHY?si=ns4W2IufIIJh9mLn"
//             title="YouTube video player"
//             allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//             allowFullScreen
//             frameBorder="0"
//           ></iframe>
//         </div>
//         {/* Text Section */}
//         <div className='flex flex-col gap-4 md:px-8 text-center text-slate-600 md:text-left md:w-1/2'>
//           <h1 className='md:text-3xl text-2xl font-bold'>Market Your Next Project with Philhub</h1>
//           <p className='flex text-[15px] md:w-[70%] '>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro nihil
//             vitae dignissimos, magni quae beatae quod repellendus maiores fugiat
//             aspernatur rem illum excepturi, voluptas illo eius ex autem qui?
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner2;

import React from 'react';
import { motion } from 'framer-motion';

const Banner2 = () => {
  return (
    <motion.div
      className='container bg-white w-full max-w-[100%] h-full sm:overflow-x-hidden py-8 md:pt-[90px]'
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-col md:flex-row items-center gap-8'>
        {/* Video Section */}
        <div className='w-full md:px-8 md:w-1/2'>
          <iframe
            className='aspect-video w-full'
            src="https://www.youtube.com/embed/sO4te2QNsHY?si=ns4W2IufIIJh9mLn"
            title="YouTube video player"
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
        {/* Text Section */}
        <div className='flex flex-col gap-4 md:px-8 text-center text-slate-600 md:text-left md:w-1/2'>
          <h1 className='md:text-3xl text-2xl font-bold'>Market Your Next Project with Philhub</h1>
          <p className='flex text-[15px] md:w-[70%] '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro nihil vitae dignissimos, magni quae beatae quod repellendus maiores fugiat aspernatur rem illum excepturi, voluptas illo eius ex autem qui?
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Banner2;
