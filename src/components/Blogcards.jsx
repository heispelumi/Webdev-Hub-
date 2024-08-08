// import React from 'react';

// const Blogcards = ({ Img }) => {
//   return (
//     <div className='p-4 shadow-lg  border'>
//       <div className='overflow-hidden'>
//         <img 
//           className='mx-auto h-[200px] p-2  md:h-[300px] w-full object-cover border rounded-md transition duration-700 hover:skew-x-2 hover:scale-110' 
//           src={Img} 
//           alt="Blog" 
//         />
//       </div>

//       <div className='flex  items-center justify-between m-1 pt-1 text-slate-400'>
//         <p>September, 2023</p>
//         <p className='line-clamp-1 '>HIM/HER</p>
//       </div>


//       <div className='flex  items-center justify-between m-1 pt-1 '>
//       <h1 className='line-clamp-1 font-bold '>How to grow your brand</h1>
//       </div>
//     </div>
//   );
// }

// export default Blogcards;


import React from 'react';
import { motion } from 'framer-motion';

const Blogcards = ({ Img }) => {
  return (
    <motion.div
      className='p-4 shadow-lg border'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div className='overflow-hidden'>
        <motion.img
          className='mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'
          src={Img}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
     <div className='flex  items-center justify-between m-1 pt-1 text-slate-400'>
         <p>September, 2023</p>        <p className='line-clamp-1 '>HIM/HER</p>
      </div>

       <div className='flex  items-center justify-between m-1 pt-1 '>
       <h1 className='line-clamp-1 font-bold '>How to grow your brand</h1>
       </div>
    </motion.div>
  );
}

export default Blogcards;
