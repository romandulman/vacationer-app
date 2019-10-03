 const adminCheck = (req,res,next) =>{
console.log(req.user)
    if (!req.user) {
        res.status(401).json({
            authenticated: false,
            message: "user has not been authenticated"
        });
    } else {
       next();
    }
};

 module.exports = adminCheck;









