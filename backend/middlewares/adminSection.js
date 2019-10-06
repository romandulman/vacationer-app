 const adminCheck = (req, res, next) => {
   const adminRole = req.user.dataValues.role === 1;
   if (!adminRole) {
     res.status(401).json({
       authenticated: false,
       message: "user has not been authenticated"
     });
   } else {
     next();
   }
 };
 module.exports = adminCheck;









