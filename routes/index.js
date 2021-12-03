const express = require ("express")
const route =  express.Router()
const userRouter = require('./user.routes')
const bookRouter= require('./book.routes')



route.get("/",(req,res)=>{
console.log("express")
    res.json("ini dari express")
})
route.use("/user",userRouter)
route.use("/book",bookRouter)
module.exports=route