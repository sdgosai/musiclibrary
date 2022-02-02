const User = require("../model/userschema.js");

const addUserData = async (req,res) => {
	try{
        console.log(req.body)
        const addRecord = new User(req.body)
        const user = await addRecord.save();
        res.status(201).send("Record inserted");
    } catch(err) {
        res.status(400).send(err.message);
    }
};

const getUser = async (req, res) => {
    try{
        const getRecord =  await User.find({});
        res.status(200).send(getRecord);
    }catch(err) {
        res.status(400).send(err.message);
    }
};

module.exports = {addUserData, getUser};