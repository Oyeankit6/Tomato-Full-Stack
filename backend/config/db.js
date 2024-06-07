import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://oyeankit6:8930522231@cluster0.siuvfqb.mongodb.net/food-del"
    )
    .then(() => console.log(" connected to DB"));
};
