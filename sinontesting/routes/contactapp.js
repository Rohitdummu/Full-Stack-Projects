const express=require("express") 
const router=express.Router()
const Controllers=require("../controllers/contactsappcontroller")

router.get("/getcontactdetails/:mail",
Controllers.fetchdata
)
router.get("/test/:id",
Controllers.stest
)
router.post("/createuser",
Controllers.createdata
)
router.post("/updatedb/:fname",
Controllers.updatedata
)    
router.post("/deletedb/:email",
Controllers.deletedata
)

module.exports=router