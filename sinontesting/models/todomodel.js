const mongoose = require("mongoose")
const schema = mongoose.Schema
const todoschema = new schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    completion:{
        type:Boolean
    }
})

const todomodl = mongoose.model("tododb",todoschema)

module.exports=todomodl