const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/courses', async (req, res) => {
    const { name, email, mobile, password, course, message } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !mobile || !password || !course || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
        name: name,
        email: email,
        mobile: mobile,
        password: hashedPassword,
        course: course,
        message: message
    });

    // Save the user to the database
    try {
        const savedUser = await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ _id: savedUser._id }, "your_secret_key");

        // Set JWT token in cookie
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



router.post('/login', async (req, res) => {
    const user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(404).send({
            message:"User not Found"
        });
    }
    if(!(await bcrypt.compare(req.body.password,user.password))){
        return res.status(400).send({
            message:"Password is Incorrect"
        })
    }
    const token=jwt.sign({_id:user._id},"secret key")

    res.cookie("jwt", token,{
        httpOnly:true,
        maxAge:24*60*60*1000
    })
    res.send({
        message:"success"
    })
});



router.get('/user', (req, res) => {
    res.send('user');
});
  
  module.exports = router;
  
