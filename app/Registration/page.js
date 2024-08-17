"use client";
import React, { useState, useEffect } from "react";
import { CiUser, CiLock, CiMobile1 } from "react-icons/ci";
import { BiHide, BiShow } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Registration = () => {
  const router=useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mob: "",
    password: "",
  });
  useEffect(() => {
    const getRegisterData = async () => {
      try {
        const response = await fetch("/api/register");
        const data = await response.json();
        toast(data.message);
      } catch (error) {
        toast("Error: " + error.message);
      }
    };

    getRegisterData();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error("Failed to register");
      }
      const data = await response.json();
      toast(data.message);
      router.push('/Login')
    } catch (error) {
      toast("Error: " + error.message);
    }
  };

  return (
    <>
      <div
        className="absolute w-full h-[100vh] bg-black top-0 right-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
      >
        <div className="w-full h-full flex items-center justify-center ">
          <div className="w-[30%] h-fit opacity-100 bg-white md:p-12">
            <h2 className="font-bold w-full text-center text-[25px] font-sans mb-8">
              Registration
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <p className="text-sm">Name</p>
                <div className="flex pb-2 items-center w-full mt-2 mb-8 border-b-2 border-solid border-gray-300 gap-2">
                  <CiUser className="w-[22px] h-[22px]" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    style={{
                      outline: "none",
                      border: "none",
                      background: "transparent",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <p className="text-sm">Username</p>
                <div className="flex pb-2 items-center w-full mt-2 mb-8 border-b-2 border-solid border-gray-300 gap-2">
                  <CiUser className="w-[22px] h-[22px]" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter Your User Name"
                    style={{
                      outline: "none",
                      border: "none",
                      background: "transparent",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <p className="text-sm">Mob.</p>
                <div className="flex mt-2 mb-8 pb-2 items-center w-full border-b-2 border-solid border-gray-300 gap-2">
                  <CiMobile1 className="w-[22px] h-[22px]" />
                  <input
                    type="number"
                    name="mob"
                    value={formData.mob}
                    onChange={handleChange}
                    placeholder="Enter Your Number"
                    style={{
                      outline: "none",
                      border: "none",
                      background: "transparent",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <p className="text-sm">Email</p>
                <div className="flex mt-2 mb-8 pb-2 items-center w-full border-b-2 border-solid border-gray-300 gap-2">
                  <MdOutlineMail className="w-[22px] h-[22px]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    style={{
                      outline: "none",
                      border: "none",
                      background: "transparent",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <p className="text-sm">Password</p>
                <div className="flex mt-2 mb-8 pb-2 items-center w-full border-b-2 border-solid border-gray-300 gap-2">
                  <CiLock className="w-[22px] h-[22px]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    style={{
                      outline: "none",
                      border: "none",
                      background: "transparent",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  {!showPassword ? (
                    <BiHide
                      className="w-[24px] h-[24px]"
                      onClick={() => setShowPassword(true)}
                    />
                  ) : (
                    <BiShow
                      className="w-[24px] h-[24px]"
                      onClick={() => setShowPassword(false)}
                    />
                  )}
                </div>
              </div>

              <div className="w-full mb-6">
                <Link href="/">
                  <p className="text-sm">
                    Already Registered?{" "}
                    <span className="text-blue-600 font-semibold">Login</span>
                  </p>
                </Link>
              </div>

              <div className="w-full">
                <button
                  type="submit" // Changed from 'button' to 'submit' to trigger form submission
                  style={{ width: "100%" }}
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Registration;
