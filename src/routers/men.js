const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");



//Adding data to collection
router.post("/mens", async(req, res) =>{
    try{
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertmens = await addingMensRecords.save();
        res.status(201).send(insertmens);
    }catch(e){
        res.status(400).send(e);
    }
})

//Reading Data
router.get("/mens", async(req, res) =>{
    try{
        const readAllData = await MensRanking.find({}).sort({"ranking" :1});
        res.send(readAllData);
    }catch(e){
        res.status(400).send(e);
    }
})

//Reading Data for individual
router.get("/mens/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const getDataForIndiv = await MensRanking.findById(_id);
        res.send(getDataForIndiv);
    }catch(e){
        res.status(400).send(e);
    }
})

//Updating with Patch
router.patch("/mens/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const UpdatingSingleRecord = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(UpdatingSingleRecord);
    }catch(e){
        res.status(500).send(e);
    }
})

//Deleting record
router.delete("/mens/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const DeleteSingleRecord = await MensRanking.findByIdAndDelete(_id);
        res.send(DeleteSingleRecord);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;