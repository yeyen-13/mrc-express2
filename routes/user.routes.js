const express = require ("express")
const route =  express.Router()
const users = require('../models/user')
const{getAlluser,getUseById,postUser,deleteUserById,putUserById}= require('../controler/user.controler')
const{middelwereDeleteUser,middelwerePutUser}=require("../middelwere/middelwele")
// get all use
route.get("/",getAlluser)
// get user by id
route.get("/:id",getUseById)
// post user
route.post("/",postUser)

// delete user by id
route.delete("/:id",middelwereDeleteUser, deleteUserById)
// put user by is

route.put("/:id",middelwerePutUser,putUserById);

module.exports=route