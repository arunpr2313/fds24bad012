const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Online Course Management API is running");
});

const url = "mongodb+srv://arunpr2313_db_user:Y1idBqf6e60N34XX@cluster0.csnjf0s.mongodb.net/contact_management";
const client = new MongoClient(url);

let courses;

async function connectDB() {
    await client.connect();

    const database = client.db("courseDB");
    courses = database.collection("courses");

    console.log("MongoDB connected");
}

app.post("/courses", async (req, res) => {
    const course = req.body;

    await courses.insertOne(course);

    res.send("Course inserted successfully");
});

app.get("/courses/:courseId", async (req, res) => {
    const courseId = req.params.courseId;

    const course = await courses.findOne({ courseId: courseId });

    if (course) {
        res.json(course);
    } else {
        res.send("Course not found");
    }
});

connectDB().then(() => {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
});