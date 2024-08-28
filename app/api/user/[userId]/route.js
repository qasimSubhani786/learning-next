import User from "@/app/_libs/mongo/models/user";
import connectMongoDB from "@/app/_libs/mongo/mongodb";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  try {
    await connectMongoDB();
    const { userId } = params;
    const { newFullName: fullName, newsalary: salary } = await req.json();
    await User.findByIdAndUpdate(userId, { fullName, salary });
    return NextResponse.json({ message: "User Data Updated" }, { status: 200 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error in User updattion" },
      { status: 500 }
    );
  }
};
