const sinon=require("sinon")
const Controllers=require("../controllers/contactsappcontroller")
const Contact=require("../models/mongoosesc")

// test suite 1

describe("setup for testing",function(){
    let req={
        body:{
            
            "userid":5,
            "fname":"mahi",
            "email":"mahi@gmail.com",
            "phone":9856556666        
        },
        params:{
            id:"62d1987c90ccf1fdb6a87ee3"
        }
    }
    let error = new Error("some err occured")
    let res={}
    let expectedResult
    //test suite 1.1
    describe("check find is working",function(){
        beforeEach(function(){
            res={
                json:sinon.spy(),
                status:sinon.stub().returns({end:sinon.spy()})
            };
            
        })

        it("check find is working or not",function(){
            expectedResult=req.body 
            sinon.stub(Contact,'findById').yields(null,expectedResult)
            Controllers.stest(req,res)//controller fun
            sinon.assert.calledWith(Contact.findById,req.params.id)// proper inbuilt method
            sinon.assert.calledWith(res.json,sinon.match({fname:req.body.fname}))
            sinon.assert.calledWith(res.json,sinon.match({userid:req.body.userid}))
            sinon.assert.calledWith(res.json,sinon.match({email:req.body.email}))
            sinon.assert.calledWith(res.json,sinon.match({phone:req.body.phone}))
        })
    })
})