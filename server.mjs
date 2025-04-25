import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { router as vehicleRouter } from "./src/routes/vehicle.router.mjs";
import { router as userRouter } from "./src/routes/user.router.mjs";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/vehicle", vehicleRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Example app listening on port: " + PORT);
});