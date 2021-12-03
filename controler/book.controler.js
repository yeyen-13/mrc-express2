

const  Books = require('../models/book')

module.exports={
    getAllBook:(req,res)=>{
        res.json( Books)
    },
    getBookById:(req,res)=>{
        const {id}= req.params
        let book =  Books.find((item)=>item.id == id)
        if (book){
            res.json(book)
        }else{
            res.json("user not found")
        }
    },
    postBook:(req, res) => {
        let book = req.body;
        
        movies.push(book);
        res.json("sucses added new user");
      },
      deleteBookById:(req, res) => {
        const { id } = req.params;
    
        let book =  Books.filter((item) => item.id != id);
        if (book) {
          res.json(book);
        } else {
          res.json("not found");
        }
      },
      putBookById:(req, res) => {
        const accountId = Number(req.params.id);
        const body = req.body;
        const account =  Books.find((account) => account.id === accountId);
        const index = Books.indexOf(account);
    
        if (!account) {
          res.status(500).json("Account not found.");
        } else {
          const updatedAccount = { ...account, ...body };
    
          Books[index] = updatedAccount;
    
          res.json(updatedAccount);
        }
        
      }
}