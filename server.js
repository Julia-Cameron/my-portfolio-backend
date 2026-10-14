//import express from "express";
//var express = require("express");
//var app = express();
import dotenv from "dotenv";
dotenv.config();
import { fileURLToPath } from "url";
import path from "path";
import authRouter from "./routes/api/auth.js";

// Load .env from this file's folder so it works no matter where the app is started from
dotenv.config({ path: path.join(path.dirname(fileURLToPath(import.meta.url)), ".env") });
import app from "./server/express.js";
import router from "./server/assets-router.js";
import mongoose from "mongoose";
import contactsRouter from "./routes/api/contacts.js";
import projectsRouter from "./routes/api/projects.js";
import qualificationsRouter from "./routes/api/qualifications.js";
import usersRouter from "./routes/api/users.js";

//const assetsRouter = require("./server/assets-router");
app.use("/src", router);
app.use("/api/contacts", contactsRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/qualifications", qualificationsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/", function (req, res) {
    res.send("Welcome to My Portfolio Application");
});

const port = Number(process.env.PORT) || 3000;

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB Atlas: Portfolio");

        const server = app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/`);
        });

        server.on("error", (error) => {
            if (error.code === "EADDRINUSE") {
                console.error(`Port ${port} is already in use. Stop the other server or set a different PORT in .env.`);
            } else {
                console.error("Could not start the server:", error);
            }
            process.exitCode = 1;
        });
    } catch (error) {
        console.error("Could not connect to MongoDB:", error.message);
        process.exitCode = 1;
    }
}

startServer();
//module.exports = app;
export default app;
