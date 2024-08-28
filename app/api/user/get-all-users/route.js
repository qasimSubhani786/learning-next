import User from "@/app/_libs/mongo/models/user";
import connectMongoDB from "@/app/_libs/mongo/mongodb";
import { generateApiResponse } from "@/app/_libs/util/apputil";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectMongoDB();
    const users = await User.find({}).lean(); // Fetch all users from the User collection
    const response = generateApiResponse(true, "Users list ", users);

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error in User Creattion" },
      { status: 500 }
    );
  }
};
