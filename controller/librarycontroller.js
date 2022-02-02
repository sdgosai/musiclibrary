const Library = require("../model/libraryschema");
const mongoose = require('mongoose');

const addLibraryData = async (req,res) => {
	try{
        console.log(req.body)
        const addRecord = new Library(req.body)
        const library = await addRecord.save();
        res.status(201).send("Record inserted");
    } catch(err) {
        res.status(400).send(err.message);
    }
};

const getAllLibrary = async (req, res) => {
    try{
        const getRecord =  await Library.find({});
        res.status(200).send(getRecord);
    }catch(err) {
        res.status(400).send(err.message);
    }
}

const getLibrary = async (req, res) => {
    try{
        const userId = req.params.id
        const getRecord =  await Library.findOne({user_id:userId}).populate('user_id');
        res.status(200).send(getRecord);
    }catch(err) {
        res.status(400).send(err.message);
    }
}

const addLike = async (req, res) => {
    const userId = req.params.id
    const addLikeRecord = await Library.findByIdAndUpdate(req.body.postId,{
            $push:{likes:req.userId}
        },{
            new:true
        }).exec((err,result)=>{
            if(err){
                return res.status(422).json({error:err})
            }else{
                console.log(result);
                // res.status(200).send(getRecord)
                res.status(200).json(result)
            }
        })
    }

module.exports = {addLibraryData, getAllLibrary, getLibrary, addLike};