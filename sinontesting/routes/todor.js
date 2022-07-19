const express=require("express") 
const router=express.Router()
const Controllers=require("../controllers/todoc")

router.get("/getlist",
Controllers.getdo
)
router.post("/createlist",
Controllers.createdo
)
router.post("/updatelist/:_id",
Controllers.updatedo
)    
router.post("/deletelist/:_id",
Controllers.deletedo
)

module.exports=router