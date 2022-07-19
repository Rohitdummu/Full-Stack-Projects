const ContactModel=require("../models/mongoosesc")
let Controllers={}
Controllers.createdata= async (req,res)=>{
    const dat = req.body
    try{
        const result = await ContactModel.create({
            userid:dat.userid,
            fname:dat.fname,
            email:dat.email,
            phone:dat.phone,
            address:dat.address
        })
        res.send(result).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed create?",status:false}).status(404)
    }
}
Controllers.fetchdata = async (req,res)=>{
    const mail = req.params.mail
    try{
        const result=await ContactModel.findOne({email:mail},{userid:1,fname:1,email:1,phone:1,address:1}) // to get particular fields use projection {userud:1,fname:1,email:1,phone:1}
        res.send(result).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed fetch?",status:false}).status(404)
    }
}

Controllers.updatedata = async (req,res)=>{
    const data = req.params.email
    const nam = req.params.fname
    console.log(nam)
    try{
        const resp = await ContactModel.updateOne({email:data},{fname:"rohit"})   // here 1st argumt is to identify record 2 nd argmt is updated value
        res.send(resp).status(200)
    }                                                                        // findByIdAndUpdate("62cee3843b0bd1cc861706a2",{updated value}) and updateMany
    catch(err){
        console.log(err)
        res.send({msg:"failed update?",status:false}).status(404)
    }
}

Controllers.deletedata = async (req,res)=>{
    const data2 = req.params.email
    try{
        const resp = await ContactModel.deleteOne({email:data}) // for delete also deleteMany, findByIdAndDelete("62bda337b220e79498d6b9d5")
        res.send(resp).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed delete?",status:false}).status(404)
    }
}

Controllers.stest=function(req,res){
    const id=req.params.id
    return ContactModel.findById(id,function(err,result){
        if(err){
           return res.send("error")
        }
        else{
            return res.json(result)
        }
    })
}

module.exports=Controllers
