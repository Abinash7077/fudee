import mongoose from 'mongoose';
import UserModel from '@/app/models/UserModel';
import bcrypt from 'bcrypt';
import connectDB from '@/app/db';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config(); // Ensure environment variables are loaded

export async function GET() {
  try {
    await connectDB();
    const users = await UserModel.find({});
    return NextResponse.json({ message: 'Data retrieved successfully', users }, { status: 200 });
  } catch (error) {
    console.error('Error retrieving data:', error); // Detailed error logging
    return NextResponse.json({ message: 'Error retrieving data', error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const { name, username, mob, email, password } = data;

    if (!name || !username || !mob || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 201 });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 201 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      username,
      mob,
      email,
      password: hashedPassword,
    });

    const result = await newUser.save();
const token=jwt.sign({token:result._id},"Amb",{
  expiresIn:'10d'
})
const headers = new Headers();
headers.append('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=900;`);

return new NextResponse(JSON.stringify({ message: 'User registered successfully' }), {
  status: 200,
  headers
});

  } catch (error) {
    return NextResponse.json({ message: 'Error registering user', error: error.message }, { status: 500 });
  }
}
