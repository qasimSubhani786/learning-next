import RealtimesocketSchema from "../../../_libs/mongo/models/realtime";
import connectMongoDB from "@/app/_libs/mongo/mongodb";
import { generateApiResponse } from "../../../_libs/util/appUtil";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectMongoDB();

    // Parse the request body
    const { userList } = await req.json(); // Parsing the JSON body explicitly

    for (const item of userList) {
      await RealtimesocketSchema.updateOne(
        { _id: item._id },
        {
          $set: {
            id: item.id,
          },
        }
      );
    }
    const response = generateApiResponse(true, "Users list ", null);

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
export const GET = async (req: NextRequest) => {
  try {
    await connectMongoDB();

    const users = await RealtimesocketSchema.find().sort({ id: 1 }).lean(); // Fetch all users from the User collection
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
