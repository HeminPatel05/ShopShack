import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";

//dotenv config
dotenv.config();

//rest object
const app = express();

//database config
connectDB();

//middleware
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);

// rest API
app.get("/", (req, res) => {
  res.send({
    message: "welcome to ecom app",
  });
});

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
