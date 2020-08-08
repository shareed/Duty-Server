const jwt = require("jsonwebtoken")
module.exports = (req, res, next) => {
    const authError = {
        message: "Invalid credentials",
    }
    const token = req.headers.authorization
    
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if(err) {
                res.status(401).json({message: "TOKEN INVALID", authError});
            } else {
                console.log('From restrict-middleware',decodedToken)
                
                req.user = { username: decodedToken.username };
                if (!req.session || !req.session.user) {
                    return res.status(401).json({message: "SESSION ERROR", authError})
                }
                console.log("user from middleware", req.user)
                console.log("This is the token from the restrict middlesware:", token);
                next();
            }
        });
    } else {
        res.status(403).json({ message: 'User is not logged in!' });
    }
        
}