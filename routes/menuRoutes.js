
const express = require('express');

const router = express.Router();

const menu = require('../models/menuModels');

router.get('/',async(req,res)=>{

    try{

        const response = await menu.find();

        if(response) {
        console.log('Data Fatched successfully');
        res.status(200).json(response);
        } else {

        console.log(err);
        res.status(500).json({error:'Data Note Found'});
        }


    } catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }

});

router.post('/',async(req,res)=>{

    try{

        const addData = req.body;
        
        const newMenu = new menu(addData);
        //const id = req.params.id;
        const response = await newMenu.save();

        if(response) {
        console.log('Data added successfully');
        res.status(200).json(response);
        } else {

        console.log('Ids not Found');
        res.status(500).json({err:'Data Not Founds'});
        }


    } catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server Error'});
    }

});


router.put('/:id',async(req,res)=>{

    try{

        const updateData = req.body;

        const id = req.params.id;
        const response = await menu.findByIdAndUpdate(id,updateData,
            {
                new: true,
                runValidator:true
            }
        );

        if(response) {
        console.log('Data Updated successfully');
        res.status(200).json(response);
        } else {

        console.log('Ids not Found');
        res.status(500).json({err:'Data Not Founds'});
        }


    } catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server Error'});
    }

});

router.delete('/:id',async(req,res)=>{

    try{

        const id = req.params.id;
        const response = await menu.findByIdAndDelete(id);

        if(response) {
        console.log('Data Deleted successfully');
        res.status(200).json(response);
        } else {

        console.log('Id not Found');
        res.status(500).json({err:'Data Not Found'});
        }


    } catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server Error'});
    }

});

module.exports = router;






