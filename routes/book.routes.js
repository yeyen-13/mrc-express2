const express = require ("express")
const route =  express.Router()
const books = require('../models/book')
const{getAllBook,getBookById,deleteBookById,postBook,putBookById}=require('../controler/book.controler')
const{middelwereDeleteBook,middelwerPutBook}= require("../middelwere/middelwele")
// get all book
route.get("/",getAllBook)
// get book by id
route.get("/:id",getBookById)
// post book
route.post("/",postBook)

// delete book by id
route.delete("/:id",middelwereDeleteBook, deleteBookById)
// put bookuser by is

route.put("/:id",middelwerPutBook,putBookById);




module.exports=route