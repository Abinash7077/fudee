'use client'
import React, { useState,useEffect } from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { getCookie } from 'cookies-next';
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    debugger;
    const token = getCookie('token');
    console.log(token, "token");
  }, []);
  return (
    <div className="h-[80px] px-2 shadow-bottom-sm shadow-gray-100 w-full relative ">
      <div className="md:max-w-[1200px] w-full flex items-center justify-between mx-auto h-full">
        <div className="flex items-center">
          <h2 className="text-black text-[20px]">Abinash</h2>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center justify-between gap-12">
            <li className="text-[17px] text-black cursor-pointer font-serif flex items-center gap-2 font-semibold">
              <AiOutlineInbox />
              Fudee Official
            </li>
            <li className="text-[17px] text-black cursor-pointer font-serif flex items-center gap-2 font-semibold">
              <CiSearch />
              Search
            </li>
            <li className="text-[17px] text-black cursor-pointer font-serif flex items-center gap-2 font-semibold">
              <BiSolidOffer />
              Offers
            </li>
            <li className="text-[17px] text-black cursor-pointer font-serif flex items-center gap-2 font-semibold">
              <IoHelpBuoyOutline />
              Help
            </li>
            <li className="text-[17px] text-black cursor-pointer font-serif flex items-center gap-2 font-semibold" >
              {isLoggedIn?<><Link className="text-[17px] text-black cursor-pointer font-serif flex items-center gap-2 font-semibold" href='/Login'><CgProfile />
                Sign Out</Link></>:<Link className="text-[17px] text-black cursor-pointer font-serif flex items-center gap-2 font-semibold" href='/Login'><CgProfile />
                Sign In</Link>}
              
            </li>
            <li className="text-[17px] text-black cursor-pointer font-serif flex items-center gap-2 font-semibold">
              <CiShoppingCart />
              Cart
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
