import { NextResponse } from "next/server";

import DocumentStatus from "../../../app/_libs/mongo/models/documentStatus"; // Import the Mongoose model for the Document Status collection
import connectMongoDB from "@/app/_libs/mongo/mongodb";

export const POST = async (req) => {
  try {
    // Log the request headers for debugging purposes
    console.log("Webhook headers:", req.headers);

    // Extract relevant information from headers (Google webhook sends data via headers)
    const resourceId = req.headers.get("x-goog-resource-id");
    const resourceState = req.headers.get("x-goog-resource-state");
    const channelId = req.headers.get("x-goog-channel-id");
    const messageNumber = req.headers.get("x-goog-message-number");
    const resourceUri = req.headers.get("x-goog-resource-uri");

    // Log the extracted data to verify it's correct
    console.log("resourceId:", resourceId, "resourceState:", resourceState);

    // If the required fields are missing, return an error response
    if (!resourceId || !resourceState) {
      return NextResponse.json(
        { message: "Required headers are missing" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Insert the document status into the MongoDB collection
    await DocumentStatus.create({
      documentId: resourceId,
      status: resourceState, // Example field - state from the header
      timestamp: new Date(), // Add the current timestamp
      channelId: channelId, // Add additional information from the headers
      messageNumber: messageNumber,
      resourceUri: resourceUri, // Store the full resource URI (optional)
      headers: req.headers, // Optionally store the entire headers for debugging
    });

    // Return success response
    return NextResponse.json({ message: "Webhook processed successfully" });
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json(
      { message: "Error processing webhook", error: error.message },
      { status: 500 }
    );
  }
};
