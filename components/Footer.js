import React from 'react';
import { FaRegCopyright } from "react-icons/fa6";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="flex w-full mt-12 items-center justify-between flex-col h-fit">
      <div className="bg-slate-200 w-full">
        <div className="max-w-[850px] mx-auto h-[110px] flex items-center justify-between gap-6 ">
      <h2 className='text-gray-800 font-bold text-[22px]'>For better experience, download <br />the Swiggy app now</h2>
      <div className="flex items-center gap-4">
        <img src="/FoodeeImages/SwiggyImages164.png" alt="swiggy164" className='w-[200px]' />
        <img src="/FoodeeImages/SwiggyImages165.png" alt="swiggy165" className='w-[200px]'  />
      </div>
      </div></div>
      <div className='w-full bg-slate-900 flex items-center text-white h-[350px]'>
      <div className="max-w-[1300px] mx-auto py-10 flex justify-between gap-4">
        <div className="min-w-[250px] max-w-[460px]">
          <p className='flex gap-1'><FaRegCopyright  className='mt-1'/> 2024 Bundi Technologies <br /> Pvt. Ltd</p>
        </div>
        <div className="min-w-[250px] flex gap-4 flex-col">
          <h3 className='text-[18px] font-bold'>Company</h3>
          <Link href='/'><p className='text-gray-400'>About</p></Link>
          <Link href='/'><p className='text-gray-400'>Career</p></Link>
          <Link href='/'><p className='text-gray-400'>Team</p></Link>
          <Link href='/'><p className='text-gray-400'>Swiggy One</p></Link>
        </div>
        <div className="min-w-[250px] flex gap-4 flex-col">
          <h3 className='text-[18px] font-bold'>Contact Us</h3>
          <Link href='/'><p className='text-gray-400'>Help & Support</p></Link>
          <Link href='/'><p className='text-gray-400'>Partner with us</p></Link>
          <Link href='/'><p className='text-gray-400'>Ride with us</p></Link>
        </div>
        <div className="min-w-[250px] flex gap-4 flex-col">
          <h3 className='text-[18px] font-bold'>Legal</h3>
          <Link href='/'><p className='text-gray-400'>Terms & Conditions</p></Link>
          <Link href='/'><p className='text-gray-400'>Cookie Policy</p></Link>
          <Link href='/'><p className='text-gray-400'>Privacy Policy</p></Link>
          <Link href='/'><p className='text-gray-400'>Investor Relations</p></Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
