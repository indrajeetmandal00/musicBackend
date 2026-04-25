//avoid repeatd validation code in controllers we can create a middleware for authentication and authorization and use it in the routes where we need to protect the routes from unauthorized access
const jwt=require('jsonwebtoken');

async function authArtist(req,res,next){
    try{
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({message:'No token provided'});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role!=='artist'){
            return res.status(401).json({message:'Unauthorized'});
        }
        
        req.user=decoded; // we can access the decoded token in the controller by req.user
        next(); //bcz of next() request goes to multer and then to controller 
    }
    catch(error){
        return res.status(401).json({message:'Invalid token'});
    }
}


async function authUser(req,res,next){

    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:'No token provided'});
    }   

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role!=='user' && decoded.role!=='artist'){
            return res.status(401).json({message:'Unauthorized access'});
        }
        req.user=decoded; // we can access the decoded token in the controller by req.user
        next();
    }
    catch(error){
        return res.status(401).json({message:'Invalid token'});
    }

} 


module.exports={authArtist, authUser}; //exported yo music.controllers.js
