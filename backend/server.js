import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";
import contactRoute from "./routes/contactRoute.js";

dotenv.config();

const app = express();

/* =========================================
   DATABASE
========================================= */

connectDB();

/* =========================================
   MIDDLEWARE
========================================= */

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

/* =========================================
   RATE LIMITER
========================================= */

const limiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    max: 100,

    message: {

        success: false,

        message: "Too many requests. Please try again later."

    }

});

app.use(limiter);

/* =========================================
   ROUTES
========================================= */

app.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message: "Portfolio Backend Running 🚀"

    });

});

app.use("/api/contact", contactRoute);

/* =========================================
   404
========================================= */

app.use("*", (req, res) => {

    res.status(404).json({

        success: false,

        message: "Route Not Found"

    });

});

/* =========================================
   SERVER
========================================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`🚀 Server Running on Port ${PORT}`);

});