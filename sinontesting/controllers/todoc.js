const TodoModel=require("../models/todomodel")
let Controllers={}
Controllers.createdo = async (req,res)=>{
    const data = req.body
    try{
        const result = await TodoModel.create({
            title:data.title,
            text:data.text,
            completion:false
        })
        res.send({msg:"created successfully",data:result,status:true}).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed create?",status:false}).status(404)
    }
}

Controllers.getdo = async (req,res)=>{
    try{
        const result = await TodoModel.find({},{_id:1,title:1,text:1,completion:1})
        res.send(result).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed get?",status:false}).status(404)
    }
}
Controllers.updatedo = async (req,res)=>{
    const ud = req.body
    const data = req.params._id
    console.log(data)
    console.log(ud)
    try{
        const result = await TodoModel.updateOne({_id:data},ud) //{completion:true}
        res.send(result).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed update?",status:false}).status(404)
    }
}

Controllers.deletedo = async (req,res)=>{
    const data = req.params._id
    try{
        const result = await TodoModel.deleteOne({_id:data})
        res.send({msg:"deleted successfully",status:true,res:result}).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed delete?",status:false}).status(404)
    }
}

module.exports = Controllers