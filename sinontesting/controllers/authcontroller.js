const AuthModel=require("../models/newmodel")
let Controllers={}
const bcrypt = require("bcrypt") 
const jtoken = require("jsonwebtoken")
Controllers.signup = async (req,res)=>{
    try{
        const dat = req.body
        // const salt = await bcrypt.genSalt(5) // increase for more secure 5-15
        // console.log("salt",salt)
        const hashedpwd = await bcrypt.hash(dat.password,5) // another method to generate hash and salt is give salt rounds as second argu 
        //console.log("hashedpwd",hashedpwd)
        const valid = await AuthModel.findOne({email:dat.email})
        if(valid){
            res.send({msg:"email already existed?",status:false}).status(404)
        }
        else{
            const result = await AuthModel.create({
                email:dat.email,
                password:hashedpwd
            })
            //res.send(result).status(200)
            res.send({msg:"signup done",status:true}).status(200)
        }
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed signup?",status:false}).status(404)
    }
}
Controllers.signin = async (req,res)=>{
    const data = req.body
    const dbdata = await AuthModel.findOne({email:data.email})
    if(dbdata){
    try{
        const compare = await bcrypt.compare(data.password,dbdata.password)
        //res.send(result).status(200)
        if(compare){
            const jwtoken = jtoken.sign({email:data.email},'rohit',{expiresIn:'1h',algorithm:'HS512',issuer:'rohit'})
            //console.log("tokn",jwtoken)
            res.send({msg:"yay u are in",status:true,token:jwtoken}).status(200)
        }
        else{
            res.send({msg:"failed signin?",status:false}).status(404)
        }
    }
    catch(err){
        console.log(err)
    }
} 
else{
    res.send({msg:"user not existed?",status:false}).status(404)
}
}
module.exports = Controllers