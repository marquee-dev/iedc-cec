const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors=require('cors')
require('dotenv').config();

const app=express()
const PORT=process.env.PORT || 4000

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

const Idea = require("./models/Idea");

// POST route to submit an idea
app.post("/api/ideas", async (req, res) => {
  const { name, className, idea } = req.body;

  if (!name || !className || !idea) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newIdea = new Idea({
      name,
      className,
      idea,
    });

    await newIdea.save();

    res.status(201).json({ message: "Idea submitted successfully!" });
  } catch (error) {
    console.error("Error saving idea:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});
  
  mongoose.connect(process.env.MONGO_URI,{connectTimeoutMS: 30000,socketTimeoutMS: 45000,})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
