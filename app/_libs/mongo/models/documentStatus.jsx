import mongoose from "mongoose";

const DocumentStatusSchema = new mongoose.Schema({
  documentId: { type: String, required: true },
  status: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  changeType: { type: String }, // Customize this field
  fullData: { type: Object }, // To store the full webhook payload
});

export default mongoose.models.DocumentStatus ||
  mongoose.model("DocumentStatus", DocumentStatusSchema);
