import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    profile: { type: String, default: null },
  },
  { versionKey: false, timestamp: true },
);

const User = model("User", userSchema);

export default User;
