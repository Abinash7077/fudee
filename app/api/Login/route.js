import mongoose from "mongoose";
import UserModel from "@/app/models/UserModel";
import dotenv from 'dotenv';
import connectDB from "@/app/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
export async function POST(request){
  try{
await connectDB();
const data= await request.json();
const {email,password,oldPassword,newPassword} = data;
//update password
if(oldPassword){
if(!newPassword){
  return NextResponse.json({message:'New password is required',Code:0},{status:400})
}
const userEmail = await UserModel.findOne({email})
if(!userEmail){
  return NextResponse.json({message:'User not found',Code:0},{status:404})
}
const passwordMatched= await bcrypt.compare(oldPassword,userEmail.password)
if(!passwordMatched){
  return NextResponse.json({message:'Password Not matched',Code:0},{status:404})
}
const salt= await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(newPassword,salt)
userEmail.password=hashedPassword;
await userEmail.save();
return NextResponse.json({message:'Password reset successfully',Code:2},{status:200})
}
//update password ends
//handle login
const userEmail= await UserModel.findOne({email});
const user= await UserModel.find({})
if(!userEmail){
  return NextResponse.json({message:'User not found',Code:3},{status:404})
}

const userPassword = await bcrypt.compare(password,userEmail.password);
if(!userPassword){
  return NextResponse.json({message:'Password Not matched'},{status:404})
}
return NextResponse.json({message:'Logged in successfully',user,Code:1},{status:200})
  }
  catch(error){
return NextResponse.json({message:'Data fetch error',error:error.message},{status:500})
  }

}