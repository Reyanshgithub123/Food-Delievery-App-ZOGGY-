const express = require("express");

const router = express.Router();

router.post('/contact',(req,res)=>{
   try {
    res.send("clicked on contacts")
    console.log("okbro")
   } catch (error) {
    console.error(error)
   }
})

module.exports=router