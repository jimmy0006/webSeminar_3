const mongoose = require('mongoose')
const connector = require('./mongooseConnector')

const {Schema}=mongoose;
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    isStudent:{
        type:Boolean,
        required:true,
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = connector.mongoose.model('User',userSchema)