
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/vipinjuneDb");

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






