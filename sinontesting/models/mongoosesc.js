const mongoose = require("mongoose")
const schema = mongoose.Schema
const contactschema = new schema({
    userid:{
        type:Number,
        required:true,
        unique:true
    },
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const modl = mongoose.model("contactapp",contactschema)

module.exports=modl