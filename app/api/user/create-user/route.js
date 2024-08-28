import User from "@/app/_libs/mongo/models/user";
import connectMongoDB from "@/app/_libs/mongo/mongodb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectMongoDB();
    const { fullName, email, salary } = await req.json();
    await User.create({ fullName, email, salary });
    return NextResponse.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error in User Creattion" },
      { status: 500 }
    );
  }
};
