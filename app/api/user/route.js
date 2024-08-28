import User from "@/app/_libs/mongo/models/user";
import connectMongoDB from "@/app/_libs/mongo/mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  try {
    await connectMongoDB();
    const id = req.nextUrl.searchParams.get("id");
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "User Deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error in User Creattion" },
      { status: 500 }
    );
  }
};
