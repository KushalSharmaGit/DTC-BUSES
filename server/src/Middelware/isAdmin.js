const isAdmin = (req,res,next) =>{
    if(req.user.id != process.env.ADMIN_ID){
        return res.status(401).json({
            message: "You are not autherized to Access this route"
        })
    }
    next();
}

module.exports = {isAdmin}