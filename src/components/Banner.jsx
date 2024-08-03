import React from 'react';
import { Link } from 'react-router-dom';
import bannerimage1 from '../assets/bannerimage1.jpeg';
import bannerImage2 from '../assets/bannerImage2.jpeg';

const Banner = () => {
  return (
    <div className='bg-violet-400 text-white'>
      {/* Desktop View */}
      <div className='container mx-auto hidden sm:block py-24'>
        {/* First Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
          {/* Text Section */}
          <div className='flex flex-col justify-center p-6 md:p-12'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>We Build Apps That Get Trending On Appstore</h1>
            <p className='text-lg text-slate-700 mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
            </p>
            <div className='space-y-4 text-slate-100'>
           
                <Link>
                  Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
                </Link>
      
                <Link>
                  Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
                </Link>
          
                <Link>
                  Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
                </Link>
        
            </div>
          </div>
          {/* Image Section */}
          <div className='flex justify-center'>
            <img className='w-[600px] h-full object-cover rounded-lg shadow-lg' src={bannerImage2} alt="Banner" />
          </div>
        </div>

        {/* Second Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Image Section */}
          <div className='flex justify-center'>
            <img className='w-[600px] h-full object-cover rounded-lg shadow-lg' src={bannerimage1} alt="Banner" />
          </div>
          {/* Text Section */}
          <div className='flex flex-col justify-center p-6 md:p-12'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>We Build Apps That Get Trending On Appstore</h1>
            <p className='text-lg text-slate-200 mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
            </p>
            <div className='space-y-4  text-slate-100' >
             
                <Link>
                  Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
                </Link>
           
                <Link>
                  Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
                </Link>
       
             
                <Link>
                  Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
                </Link>
            
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className='container mx-auto block sm:hidden py-16'>
        {/* First Section */}
        <div className='flex flex-col items-center gap-8 mb-8'>
          {/* Text Section */}
          <div className='flex flex-col items-center text-center px-6'>
            <h1 className='text-2xl font-bold mb-4'>We Build Apps That Get Trending On Appstore</h1>
            <p className='text-base text-slate-800 mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
            </p>
            <div className='space-y-4'>
         
                <Link className='text-slate-100 '>
                  Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
                </Link>
            
                <Link  className='text-slate-100 '>
                  Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
                </Link>
             
         
                <Link to='#' className='text-slate-100'>
                  Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
                </Link>
             
            </div>
          </div>
          {/* Image Section */}
          <div className='w-full flex justify-center'>
            <img className='w-full h-full object-cover rounded-lg shadow-lg' src={bannerImage2} alt="Banner" />
          </div>
        </div>

        {/* Second Section */}
        <div className='flex flex-col items-center gap-8'>
          {/* Text Section */}
          <div className='flex flex-col items-center text-center px-6'>
            <h1 className='text-2xl font-bold mb-4'>We Build Apps That Get Trending On Appstore</h1>
            <p className='text-base text-slate-700 mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessi Assumenda, velit?
            </p>
            <div className='space-y-4 text-slate-100 '>
        
                <Link  className=''>
                  Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
                </Link>
            
           
                <Link>
                  Lorem ipsum dolor, assumenda, minus expedita ut ipsa porro animi est at!
                </Link>
      
            </div>
          </div>
          {/* Image Section */}
          <div className='w-full flex justify-center'>
            <img className='w-full h-full object-cover rounded-lg shadow-lg' src={bannerimage1} alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;



