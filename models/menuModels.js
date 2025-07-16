
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    age:{
       type:Number,
       required:true 
    }
});

const menuData = new mongoose.model('menu',menuSchema);
module.exports = menuData;



