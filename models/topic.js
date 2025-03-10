import mongoose, { Schema } from "mongoose";

const topicScema = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicScema);

export default Topic;
