"use client";
import React from "react";
import { useParams } from "next/navigation";
import { MdCurrencyRupee } from "react-icons/md";
import { IoIosStar, IoIosBicycle } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoSearch } from "react-icons/io5";

const Page = () => {
  const { itemName, index } = useParams();
  console.log(itemName, index, "res");

  const cardItems = [
    {
      imageUrl: "/Images/Oyoclone002.png",
      title: `Extra ₹20 Off`,
      desc: "APPLICABLE OVER & ABOVE COUPONS",
    },
    {
      imageUrl: "/Images/Oyoclone003.png",
      title: "Flat ₹100 Off",
      desc: "USE FOR FOODIE",
    },
    {
      imageUrl: "/Images/Oyoclone004.jpg",
      title: "Extra 10% Off",
      desc: "USE PARTY",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 5,
    },
  };

  return (
    <div className="mx-auto w-[65%] font-serif py-6">
      <div className="text-[16px] font-sans text-gray-500 pb-10">
        Home /{`${itemName}/`}
        <span className="text-black">{`${index}`}</span>
      </div>
      <div className="w-full mx-auto h-fit">
        <h2 className="text-2xl ml-2 font-sans font-bold">Mithiyaj</h2>

        {/* detail section start */}
        <div className="w-full h-full">
          <div className="w-full flex gap-4 cursor-pointer mt-4">
            <div className="text-lg ml-2 font-bold orderOnlineText">
              <h3 className="ml-2">Order Online</h3>
            </div>
            <h3 className="font-bold text-lg">Dineout</h3>
          </div>

          <hr />
        </div>
        <div className="my-8">
          <div className="border-[1px] border-solid border-gray-200 rounded-[20px] p-4">
            <div className="flex items-center mb-2 gap-2 ">
              <span
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "green",
                  padding: "2px",
                }}
              >
                <IoIosStar
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "white",
                    backgroundColor: "transparent",
                  }}
                />
              </span>
              <div className="flex items-center font-sans font-bold">
                <span className="flex items-center">
                  4.6 (1K+ ratings) <LuDot />
                </span>{" "}
                <MdCurrencyRupee />
                <span>350 for two</span>
              </div>
            </div>
            <div className="flex font-semibold my-2 mt-1 text-sm items-center text-orange-500 underline">
              Bakery, Desserts
            </div>
            <div className="flex items-center my-2 mb-4 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-[7px] h-[7px] rounded-[50%] bg-gray-400 "></div>
                <div className="w-[1px] h-[23px] bg-gray-400"></div>
                <div className="w-[7px] h-[7px] rounded-[50%] bg-gray-400"></div>
              </div>
              <div className="flex flex-col justify-center font-sans">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <span>Outlet</span>
                  <span className="font-semibold">Kurla West</span>
                </div>
                <div className="flex items-center gap-4 mt-[7px]">
                  <span className="font-bold text-sm">35-40 mins</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-2 mt-4">
              <span>
                <IoIosBicycle className="w-[18px] h-[18px]" />
              </span>
              <span className="flex items-center font-sans gap-1">
                <span className="items-center flex"> 1.1 kms | </span>
                &#8377;38 Delivery fee will apply
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full">
          <div className="mb-4 w-full">
            <h3 className="font-bold text-xl font-sans">Deals for you</h3>
          </div>
          {/* card section start */}
          <div className="w-full h-fit">
            <Carousel
              responsive={responsive}
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infinite={true}
              autoPlay={true}
              interval={3000}
              swipeable={true}
              emulateTouch={true}
              containerClass="carousel-container"
              itemClass="carousel-item"
            >
              {cardItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                  style={{ margin: "0 10px" }}
                >
                  <div className="flex items-center border-[1px] border-solid border-gray-400 w-[380px] p-[12px] rounded-[20px] gap-4">
                    <Image
                      src={item.imageUrl}
                      width={100}
                      height={100}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="flex flex-col ">
                      <h3 className="font-sans text-lg font-bold">
                        {item.title}
                      </h3>
                      <h3 className="text-sm font-sans font-semibold text-gray-400">
                        {item.desc}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          {/* Card section end */}
          <div className="text-center w-full text-md tracking-widest mt-14 mb-6">MENU</div>
        </div>
        <div className="w-full cursor-pointer h-[50px] bg-gray-100 rounded-[10px] flex items-center">
          <div className="w-[95%]  font-semibold font-sans text-lg flex items-center justify-center ">
            Search for item
          </div>
          <div className="flex items-center justify-center"><IoSearch className="w-[20px] h-[20px] " /></div>
        </div>
        {/* detail section end */}
      </div>
    </div>
  );
};

export default Page;
