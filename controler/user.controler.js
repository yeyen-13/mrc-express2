

const users = require('../models/user')

module.exports={
    getAlluser:(req,res)=>{
        res.json(users)
    },
    getUseById:(req,res)=>{
        const {id}= req.params
        let user = users.find((item)=>item.id == id)
        if (user){
            res.json(user)
        }else{
            res.json("user not found")
        }
    },
    postUser:(req, res) => {
        let user = req.body;
        
        movies.push(user);
        res.json("sucses added new user");
      },
      deleteUserById:(req, res) => {
        const { id } = req.params;
    
        let user = users.filter((item) => item.id != id);
        if (user) {
          res.json(user);
        } else {
          res.json("not found");
        }
      },
      putUserById:(req, res) => {
        const accountId = Number(req.params.id);
        const body = req.body;
        const account = movies.find((account) => account.id === accountId);
        const index = movies.indexOf(account);
    
        if (!account) {
          res.status(500).json("Account not found.");
        } else {
          const updatedAccount = { ...account, ...body };
    
          movies[index] = updatedAccount;
    
          res.json(updatedAccount);
        }
      }
}