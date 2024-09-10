import mongoose, { Schema } from "mongoose";

const items_schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Items = mongoose.model("Item", items_schema);
