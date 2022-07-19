const express=require("express") 
const router=express.Router()
const Controllers=require("../controllers/protectcontroller")

  
router.post("/updatepwd",
Controllers.uppwd
)

module.exports=router