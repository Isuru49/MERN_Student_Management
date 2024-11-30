import express from 'express';
import mongoose from 'mongoose';

const app = express();

const mongoUrl = "mongodb://localhost:27017/studentmanagement"

app.listen(5000 ,()=>{
    console.log("Server is running")
})

mongoose.connect(mongoUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to MongoDB')
})

app.post('/students')