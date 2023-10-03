import mongoose from "mongoose";
import {
  ACTIVITY_LEVEL,
  BONE_TYPE,
  FEEDING_MODEL,
  LIFESTAGE,
} from "../utils/constants.js";

const PetSchema = new mongoose.Schema(
  {
    avatar: String,
    avatarPublicId: String,
    name: {
      type: String,
      required: [true, "Please provide your pet's name."],
    },
    weight: {
      type: Number,
      required: [true, "Please provide your pet's weight in pounds."],
    },
    lifeStage: {
      type: String,
      enum: Object.values(LIFESTAGE),
    },
    activityLevel: {
      type: String,
      enum: Object.values(ACTIVITY_LEVEL),
    },
    feedingModel: {
      type: String,
      enum: Object.values(FEEDING_MODEL),
    },
    boneType: {
      type: String,
      enum: Object.values(BONE_TYPE),
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Pet", PetSchema);
