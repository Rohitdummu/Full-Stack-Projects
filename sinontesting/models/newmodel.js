const mongoose = require("mongoose")
const schema = mongoose.Schema
const authschema = new schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }//,
    // active:{
    //     type:Boolean
    // }
    /*,role:{type:String,enum:{values:["tindi","nidra"],message:'{VALUE} is not a valid role'}}*/ 
    /*,
    username:{
        type:String,
        minlength:[6,"minlength of password should be 6"],
        maxlength:[10,"minlength of password should be 10"],
        required:true
    },
    email:{
        type:String,
        required:[true,"enter email ! email is mandatory"],
        unique:true,
        validate:{
            validator:(exp)=>/[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,3}$/.test(exp)
            ,
            message:property=>`${property.value} is not valid`    
        }
    }
     */
})

const newmodl = mongoose.model("auth",authschema)

module.exports= newmodl