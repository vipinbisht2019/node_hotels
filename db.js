

const mongoose = require('mongoose');
require('dotenv').config();

//mongoose.connect("mongodb://127.0.0.1:27017/vipinjuneDb");
//mongoose.connect(process.env.MONGODB_URL_LOCAL);
mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected successfully');
});

db.on('error',()=>{
    console.log('connection error');
});

db.on('disconnected',()=>{
    console.log('disconected');
});

module.exports = db;


/*
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/vipinjuneDb');

// mongoose.connect("mongodb+srv://vipinbisht2019:A9UFL1lLAbzcrOBW@cluster0.kix3fy4.mongodb.net/");
  // mongoose.connect("mongodb+srv://vipinbisht2019:A9UFL1lLAbzcrOBW@cluster0.kix3fy4.mongodb.net/vipinjuneDb?retryWrites=true&w=majority");
    mongoose.connect("mongodb+srv://vipinbisht2019:f8tJ5vpUkdyyu8Lv@cluster0.kix3fy4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


const db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB connected');
});

db.on('error', (err) => {
  console.error('Connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});



module.exports = db;

*/
/*
const mongoose = require('mongoose');
//const atlas_URL = "mongodb+srv://vipinbisht2019:f8tJ5vpUkdyyu8Lv@cluster0.kix3fy4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//const DB_URL = process.env.atlas_URL;
//const DB_URL = atlas_URL;

mongoose.connect("mongodb+srv://vipinbisht2019:A9UFL1lLAbzcrOBW@cluster0.kix3fy4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const conn = mongoose.connection;

conn.once('open',()=>{
  console.log('connected succsessfully');
});


conn.on('connected', () => {
  console.log('MongoDB connected');
});


conn.on('error',()=>{
  console.log('Failed');
});

*/

//const mongoose = require('mongoose');

//mongoose.connect("mongodb+srv://vipinbisht2019:U7zW9BKGNZIkVRV7@cluster0.kix3fy4.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0", {});
/*
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vipinbisht:e2DWJVBW2xN090rz@cluster0.rz0movp.mongodb.net/vipinjuneDb?retryWrites=true&w=majority&appName=Cluster0");


const conn = mongoose.connection;

conn.on('connected', () => {
  console.log('✅ MongoDB connected');
});

conn.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

conn.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

*/