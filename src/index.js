// require('dotenv').config({path:'./env'});
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB();

// import express from "express";
// const add = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     add.on("error", (error) => {
//       console.error("ERROR:", error);
//       throw error;
//     });
//     add.listen(process.env.PORT, () => {
//       console.log(`App is listining on port:${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("db connection failed");
//     throw error;
//   }
// });
