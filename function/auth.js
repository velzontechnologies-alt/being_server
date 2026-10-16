const jsonwebtoken = require("jsonwebtoken");


const authorization = function (req,res,next){
    console.log(req.headers)
    const authHeader = req.headers['authorization']
    const token  = authHeader && authHeader.split(' ')[1]
   //const token = req.params.token
   
   if(token==null) return res.sendStatus(401)
   try {
       let tokenResult =  jsonwebtoken.verify(token,process.env.SECRET);
    //    console.log(tokenResult)
         
       if (tokenResult) {
           req.admin_id = tokenResult.admin_id
           req.email = tokenResult.email
           req.name = tokenResult.name
           next()  
       } else {
           res.status(500).json({
               message:"Something wrong"
           })
       }  
   } catch (error) {
       return res.status(401).json({
        message:error.message
    });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
   }
   
   
};
//https://codeforgeek.com/refresh-token-jwt-nodejs-authentication/
module.exports = authorization;
