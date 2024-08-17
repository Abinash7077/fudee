'use client'
import React, { useState } from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import SortBy from "./SortBy";
import Filter from "./Filter";
import Link from "next/link";
import ProductData from "./data/ProductData";
const Products = () => {
  const [filterDialog,setFilterDialog] = useState(false);
  const [sortByDialog,setSortByDialog] = useState(false)

  const nearMeText=[
    {
      text:'Chinese Restaurant Near Me'
    },
    {
      text:'South Restaurant Near Me'
    },
    {
      text:'Korean Restaurant Near Me'
    },
    {
      text:'Punjabi Restaurant Near Me'
    },
    {
      text:'North Indian Restaurant Near Me'
    },
    {
      text:'Italian Restaurant Near Me'
    },
    {
      text:'Andhra Restaurant Near Me'
    },
    {
      text:'Seafood Restaurant Near Me'
    },
    {
      text:'Indian Restaurant Near Me'
    },
    {
      text:'Kerala Restaurant Near Me'
    },
    {
      text:'Odia Restaurant Near Me'
    },
    {
      text:'Top Restaurant Near Me'
    },
  ]
  const openFilterDialog=()=>{
    setFilterDialog(!filterDialog)
    console.log(filterDialog)
  }
  return (
    <div className="max-w-[1200px]  min-h-[50vh] h-fit mx-auto">
      <div className="my-4">
        <h2 className="text-[24px] font-sans font-bold mb-4">
          Top restaurant chains in Mumbai
        </h2>
      </div>
      <div className="flex w-full h-fit justify-between flex-wrap  gap-2">
        {ProductData.map((item, index) => (
          <div
            key={index}
            className="w-[280px] hover:shadow-xl hover:scale-500 transition-transform duration-1000 ease-in-out hover:p-2 hover:rounded-2xl h-[360px] pb-4"
          >
            <div className="w-full h-[60%]">
              <img
                src={item.images}
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  height: "100%",
                  objectFit: "cover",
                  overflow: "hidden",
                }}
                alt={item.restaurantName}
              />
            </div>
            <div className="w-full px-2 h-fit">
              <h3 className="font-bold text-[20px] font-sans">
                {item.restaurantName}
              </h3>
              <div className="flex items-center gap-2 my-2 mt-1">
                <span
                  style={{
                    width: "27px",
                    height: "27px",
                    borderRadius: "50%",
                    backgroundColor: "black",
                    padding: "3px",
                  }}
                >
                  <CiStar
                    style={{
                      width: "100%",
                      height: "100%",
                      color: "orange",
                      backgroundColor: "transparent",
                    }}
                  />
                </span>
                <span className="font-bold text-[16px] flex items-center gap-2 ">
                  {item.ratings} . {item.deliveredTime}
                </span>
              </div>
              <h4
                style={{
                  color: "gray",
                  width: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.itemName}
              </h4>
              <h4 style={{ color: "gray" }}>{item.location}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="my-4">
        <h2 className="text-[24px] font-sans font-bold mb-4">
          Restaurants with online food delivery in Mumbai
        </h2>
      </div>
      {/* Filter section */}
      <div className="flex mb-6 items-center flex-wrap gap-4">
        <div onClick={openFilterDialog} className="flex text-sm items-center gap-2 rounded-xl shadow-md border-gray-200 border-2 p-2 px-4">
          Filter <FaFilter />
        </div>
        <div className="relative" >
          <div className="flex w-fit items-center gap-2 text-sm rounded-xl shadow-md border-gray-200 border-2 p-2 px-4" onClick={()=>setSortByDialog(!sortByDialog)}>Sort By <IoIosArrowDown /></div>
          {sortByDialog?<><SortBy sortByDialog={sortByDialog}/></>:''}
        </div>
        <div className="flex items-center gap-2 rounded-xl shadow-md text-sm border-gray-200 border-2 p-2 px-4">
          Fast Delivery
        </div>
        <div className="flex items-center gap-2 rounded-xl shadow-md text-sm border-gray-200 border-2 p-2 px-4">
          New on Swiggy
        </div>
        <div className="flex items-center gap-2 rounded-xl shadow-md text-sm border-gray-200 border-2 p-2 px-4">
          Ratings 4.0+
        </div>
        <div className="flex items-center gap-2 rounded-xl shadow-md text-sm border-gray-200 border-2 p-2 px-4">
          Pure Veg
        </div>
        <div className="flex items-center gap-2 rounded-xl shadow-md text-sm border-gray-200 border-2 p-2 px-4">
         Offers
        </div>
        <div className="flex items-center gap-2 rounded-xl shadow-md text-sm border-gray-200 border-2 p-2 px-4">
          Rs. 300 - Rs. 600
        </div>
        <div className="flex items-center gap-2 rounded-xl shadow-md text-sm border-gray-200 border-2 p-2 px-4">
          Less than Rs. 300
        </div>
      </div>
      {/* Filter section ends */}
      {/* filter product start */}
      <div className="flex w-full h-fit justify-between flex-wrap  gap-2">
        {ProductData.map((item, index) => (
          <Link href={`pages/${item.city}/${index}`} >
          <div
            key={index}
            className="w-[280px] hover:shadow-xl hover:scale-500 transition-transform duration-1000 ease-in-out hover:p-2 hover:rounded-2xl h-[360px] pb-4"
          >
             <div className="w-full h-[60%]">
              <img
                src={item.images}
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  height: "100%",
                  objectFit: "cover",
                  overflow: "hidden",
                }}
                alt={item.restaurantName}
              />
            </div>
            <div className="w-full px-2 h-fit">
              <h3 className="font-bold text-[20px] font-sans">
                {item.restaurantName}
              </h3>
              <div className="flex items-center gap-2 my-2 mt-1">
                <span
                  style={{
                    width: "27px",
                    height: "27px",
                    borderRadius: "50%",
                    backgroundColor: "black",
                    padding: "3px",
                  }}
                >
                  <CiStar
                    style={{
                      width: "100%",
                      height: "100%",
                      color: "orange",
                      backgroundColor: "transparent",
                    }}
                  />
                </span>
                <span className="font-bold text-[16px] flex items-center gap-2 ">
                  {item.ratings} . {item.deliveredTime}
                </span>
              </div>
              <h4
                style={{
                  color: "gray",
                  width: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.itemName}
              </h4>
              <h4 style={{ color: "gray" }}>{item.location}</h4>
            </div>
            
           
          </div>
          </Link>
        ))}
      </div>
      {/* Filter product ends */}
      {/* Near me section start */}
      <div className="my-4">
        <h2 className="text-[24px] font-sans font-bold mb-4">
          Best Cousines Near Me
        </h2>
      </div>
      <div className="flex items flex-wrap center justify-between gap-4">
        {
          nearMeText.map((item,index)=>(
<div className="border-[2px]  border-solid border-gray-200 rounded-xl h-[50px] flex items-center px-8" key={index}>
          {item.text}
        </div>
          ))
        }
        
      </div>
      {/* Near me section ends */}
      <Filter showFilter={filterDialog} closeFilterDialog={()=>setFilterDialog(false)}/>
      <SortBy/>
    </div>
  );
};

export default Products;
