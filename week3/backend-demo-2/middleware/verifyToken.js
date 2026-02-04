import jwt from 'jsonwebtoken';

export function verifyToken(req,res,next){
    //token verification logic

    //1.Get token from req
    let signedToken = req.cookies.token;
    if(!signedToken){
        return res.status(401).json({message:"Please login first"});
    }
    //2.Verify token(decode)
    let decodedToken = jwt.verify(signedToken,'abcdef');
    console.log("Decoded token:", decodedToken);
    next();
}