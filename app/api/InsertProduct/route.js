import mongoose from 'mongoose';
import connectDB from '@/app/db';
import { NextRequest, NextResponse } from 'next/server';
import ProductModel from '@/app/models/ProductModel';

export async function POST(request) {
  try {
    // Connect to the database
    await connectDB();
    console.log("Database connected successfully");
    // Parse the request body
    const data = await request.json();

    // Destructure fields from data
    const { images, restaurantName, ratings, itemName, location, itemPrice, deliveredTime, city, offer } = data;

    // Validate required fields
    if (!images || !restaurantName || !ratings || !itemName || !itemPrice || !deliveredTime || !location || !city) {
      return NextResponse.json(
        { message: 'All fields are mandatory', code: 2 },
        { status: 400 }
      );
    }

    // Create a new product document
    const newProductData = new ProductModel({
      images,
      restaurantName,
      ratings,
      itemName,
      location,
      itemPrice,
      deliveredTime,
      city,
      offer // Optional field
    });

    // Save the product to the database
    await newProductData.save();

    // Return success response
    return NextResponse.json(
      { message: 'Details saved successfully', code: 1 },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error saving product data:", error);

    // Return error response
    return NextResponse.json(
      { message: 'Error saving product data', code: 3 },
      { status: 500 }
    );
  }
}
