import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import { CgProfile } from "react-icons/cg";
import { LiaCopyrightSolid } from "react-icons/lia";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="nav h-24 w-full">
      <div className="flex w-full h-full items-center justify-between px-8 sm:px-16">
        {/* LOGO */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-orange-300">
            PHIL<span className="text-white class">HUB</span>
          </h1>
        </div>

        {/* HAMBURGER */}
        <div onClick={() => setNav(!nav)} className="text-white cursor-pointer">
          <AiOutlineMenu className="flex sm:hidden" size={20} />
        </div>

        {/* DESKTOP NAVLINKS */}
        <div className="hidden sm:flex px-2 text-white items-center space-x-6">
          <div className="relative group">
            <Link className="flex items-center text-xl gap-x-2 h-[72px]">
              Home
              <span>
                <IoMdArrowDropdown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </Link>
            {/* DROPDOWN */}
            <div className="absolute z-10 left-0 mt-2 hidden w-[150px] rounded-md bg-gray-100 shadow-md p-2 text-black group-hover:block">
              <Link className="block px-4 py-2 hover:bg-violet-300">Services</Link>
              <Link className="block px-4 py-2 hover:bg-violet-300">About</Link>
              <Link className="block px-4 py-2 hover:bg-violet-300">Privacy Policy</Link>
            </div>
          </div>

          <div className="group gap-5">
            <Link className="flex items-center text-xl h-[72px]">
              Services
              <span>
                <IoMdArrowDropdown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </Link>

            {/* DROPDOWN */}
            <div className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl shadow-md text-black bg-white group-hover:block">
              <div className="p-2 grid sm:grid-cols-3 gap-5">
                <div className="overflow-hidden">
                  <img
                    className="max-h-[400px] w-full rounded-b-3xl object-cover"
                    src={image1}
                    alt="/"
                  />
                </div>

                <div className="p-8 col-span-2">
                  <h1 className="text-semibold text-xl">Best Selling</h1>
                  <p className="mb-4 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis in possimus fugit sit
                    <div className="grid grid-cols-3">
                      <div>
                        <h1 className="my-4 text-xl font-semibold">Development</h1>
                        <ul>
                          <li className="cursor-pointer py-1 text-black/80 hover:text-blue-500">
                            Web Development
                          </li>
                          <li className="cursor-pointer py-1 text-black/80 hover:text-blue-500">
                            Mobile Development
                          </li>
                          <li className="cursor-pointer py-1 text-black/80 hover:text-blue-500">
                            Software Development
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h1 className="my-4 text-xl font-semibold">Other Services</h1>
                        <ul>
                          <li className="cursor-pointer py-1 text-black/80 hover:text-blue-500">
                            Cloud Services
                          </li>
                          <li className="cursor-pointer py-1 text-black/80 hover:text-blue-500">
                            Mobile App
                          </li>
                          <li className="cursor-pointer py-1 text-black/80 hover:text-blue-500">
                            App Development
                          </li>
                        </ul>
                      </div>
                      <div>
                        <img className="w-full h-full object-cover" src={image2} alt="/" />
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link className="text-xl">About us</Link>
          <Link className="bg-blue-600 flex p-3 border border-none rounded-md">
            <FiPhoneCall />
          </Link>
          <div className="flex flex-col items-start">
            <p>Call us on</p>
            <p>+234 23465789</p>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {nav ? (
        <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-10"></div>
      ) : (
        ""
      )}

      {/* MOBILE SIDENAV */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 h-screen justify-between items-start w-[75%] flex-col bg-[#002147]  flex z-10 duration-300"
            : "fixed top-0 left-[-100%] h-screen w-[75%] bg-[#002147] z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          className="absolute text-white top-4 right-4 cursor-pointer"
          size={25}
        />

        <div className="flex flex-grow flex-col px-8 pt-14 justify-between h-full w-full">
          <div className="flex items-center mt-auto">
          <CgProfile  size={50} className="text-white mr-2 " />
            <div className="flex flex-col ">
            <p className="text-white text-[20px]">Atoyebi Opeyemi</p>
            <p className="text-[15px] text-slate-400">Premium User</p>
            </div>
          </div>

          <div className="flex-grow flex flex-col ">
            <div className=" text-xl text-white flex flex-col mt-[70px] space-y-8">
              <Link>Home</Link>
              <Link>Services</Link>
              <Link>About us </Link>
            </div>
          </div>

          <div className="mt-auto ">
            <p className= "text-[12px] py-4  text-slate-400 flex items-center">
              <LiaCopyrightSolid className="mr-1" /> 2024 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
