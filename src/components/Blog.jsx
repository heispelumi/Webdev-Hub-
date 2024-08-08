// // import React from 'react';
// // import Blogcards from '../components/Blogcards';
// // import img1 from '../assets/blog/img1.jpeg';
// // import img2 from '../assets/blog/img2.jpeg';
// // import img3 from '../assets/blog/img3.jpeg';

// // const Blog = () => {
// //   return (
// //     <div className='container mb-10 max-w-[100%] py-6 sm:py-12'>
// //       <h1 className='mb-8 py-2 pl-2 text-center text-3xl sm:text-5xl font-semibold'>
// //         Our Latest Blogs
// //       </h1>
// //       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  flex  sm:justify-center   gap-3'>
// //         <Blogcards Img={img1} />
// //         <Blogcards Img={img3} />
// //         <Blogcards Img={img2} />
// //       </div>
// //     </div>
// //   );
// // }

// // export default Blog;

// import React from 'react';
// import { motion } from 'framer-motion';
// import Blogcards from '../components/Blogcards';
// import img1 from '../assets/blog/img1.jpeg';
// import img2 from '../assets/blog/img2.jpeg';
// import img3 from '../assets/blog/img3.jpeg';

// const Blog = () => {
//   return (
//     <motion.div
//       className='container mb-10 max-w-[100%] py-6 sm:py-12'
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.h1
//         className='mb-8 py-2 pl-2 text-center text-3xl sm:text-5xl font-semibold'
//         initial={{ y: -50 }}
//         animate={{ y: 0 }}
//         transition={{ type: 'spring', stiffness: 50 }}
//       >
//         Our Latest Blogs
//       </motion.h1>
//       <motion.div
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex sm:justify-center gap-3'
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
//         }}
//       >
//         <Blogcards Img={img1} />
//         <Blogcards Img={img3} />
//         <Blogcards Img={img2} />
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Blog;
import React from 'react';
import Blogcards from '../components/Blogcards';
import img1 from '../assets/blog/img1.jpeg';
import img2 from '../assets/blog/img2.jpeg';
import img3 from '../assets/blog/img3.jpeg';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      className='container mb-10 max-w-[100%] py-6 sm:py-12'
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='mb-8 py-2 pl-2 text-center text-3xl sm:text-5xl font-semibold'>
        Our Latest Blogs
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex sm:justify-center gap-3'>
        <Blogcards Img={img1} />
        <Blogcards Img={img3} />
        <Blogcards Img={img2} />
      </div>
    </motion.div>
  );
}

export default Blog;
