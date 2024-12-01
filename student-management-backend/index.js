import express from 'express';
import mongoose from 'mongoose';
import Student from './studentModel.js';

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

app.post('/students',(req,res) => {
    const studentData = req.body
    const student = new Student(studentData)
    student.save().then(()=> {
        res.send("Student added")
    }).catch((error)=>{
        res.send(error)
    })
})