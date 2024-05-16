// require('dotenv').config();
//require the library
// const mongoose = require('mongoose');

// // here we are using the MongoDB Url we defined in our ENV file
// let DB_URL = process.env.DB_URL;    //mongodb://localhost/issue_track

// //connect to the database
// mongoose.connect(DB_URL , 
//   {
//     usenewurlparser: true,
//     useunifiedtopology: true
//   }).then(()=>{
//     console.log(`connection successful `);
//   }).catch((err)=>{
//     console.log(`error connecting to database` , err);
//   })


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  console.log('mongoose running...')
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }); //mongodb://localhost/issue_tracker
  console.log('sucessfully connected to the database')
}

main().catch(err => console.log(err));
export const db = mongoose.connection;
