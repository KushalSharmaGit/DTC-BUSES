const isAuthenticated = (req,res,next) =>{
    if(!req.user){
        return res.status(401).json({
            message: "Kindly Log in"
        })
    }
    next();
}

module.exports = {isAuthenticated}