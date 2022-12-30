const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const verifyToken =  (req, res, next) => {
   const token = req.cookies.token;
   console.log(token);

   if (token == null) {
      return res.status(403).send("A token is required for authentication");
   }
   jwt.verify(token, process.env.Token_key, (err, user) => {
      if (err) res.sendStatus(403);
      req.user = user;
      next();
   });
};

module.exports = {
   verifyToken: verifyToken
};
