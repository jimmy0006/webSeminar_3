const express = require("express");
const User = require('../mongoose/userSchema')

const router = express.Router();

router.route('/')
.get(async (req,res)=>{
    let users = await User.find({})
    res.json(users)
})
.post(async (req,res)=>{
    await User.create({
        name:req.body.name,
        age:req.body.age,
        isStudent:req.body.isStudent
    })
    console.log(`user ${req.body.name} joined!`)
    res.send(`user ${req.body.name} joined!`)
})
.delete(async (req,res)=>{
    await User.remove({
        name:req.body.name
    })
    res.send(`user ${req.body.name} deleted!`)
})
.put(async (req,res)=>{
    let result = await User.updateOne({
        name:req.body.name
    },{
        age:req.body.age,
        isStudent:req.body.isStudent
    })
    res.json(result)
})

module.exports = router;