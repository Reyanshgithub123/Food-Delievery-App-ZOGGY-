const express = require("express");

const router = express.Router();

router.post('/contact',(req,res)=>{
   try {
    console.log("clicked on contacts")
   } catch (error) {
    console.error(error)
   }
})

module.exports=router