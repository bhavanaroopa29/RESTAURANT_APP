import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("Connected to the database successfully!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to the database! ${err}`);
    });
};
