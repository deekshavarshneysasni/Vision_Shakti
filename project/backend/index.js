const express = require('express');
const mongoose=require('mongoose');
const routes = require('./routes/routes')
const cors=require('cors');
const cookieParser=require('cookie-parser');

const app=express();



app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}));

app.use(cookieParser());

app.use(express.json());

app.use("/api",routes);

mongoose.connect("mongodb+srv://gourkhedevaibhav:12345@cluster0.ybliqaq.mongodb.net/myapp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Database");

    app.listen(3000, () => {
      console.log("App is running on port 3000");
    });
  })
  .catch(error => {
    console.error("Error connecting to database:", error);
  });
