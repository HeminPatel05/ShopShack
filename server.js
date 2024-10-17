import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//dotenv config
dotenv.config();

//rest object
const app = express();

//database config
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);

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
