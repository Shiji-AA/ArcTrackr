import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Routes/AdminRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const corsOptions = {
  origin: [
    'http://localhost:4000',
    'http://localhost:3000',
    'https://arc-trackr.vercel.app',
    'https://arctrackr.onrender.com'
  ],
  methods: "GET,POST,PUT,DELETE,PATCH",     
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin", router);

app.get("/", (req, res) => res.send("Server is Ready"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
