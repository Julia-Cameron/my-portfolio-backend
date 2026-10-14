import "dotenv/config";
import mongoose from "mongoose";
import Contact from "./models/contacts.js";
import Project from "./models/projects.js";
import Qualification from "./models/qualifications.js";
import User from "./models/users.js";

await mongoose.connect(process.env.MONGODB_URI);
for (const m of [Contact, Project, Qualification, User]) {
    await m.createCollection();
    console.log("Created collection:", m.collection.name);
}
console.log("Database:", mongoose.connection.name);
await mongoose.disconnect();
