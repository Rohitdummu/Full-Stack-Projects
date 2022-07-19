const express=require("express") 
const router=express.Router()
const Controllers=require("../controllers/authcontroller")

router.post("/getin",
Controllers.signin
)
  
router.post("/fill",
Controllers.signup
)

module.exports=router