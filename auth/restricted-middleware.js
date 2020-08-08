const jwt = require("jsonwebtoken")
module.exports = (req, res, next) => {
    const authError = {
        message: "Invalid credentials",
    }
    const token = req.cookies.token

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if(err) {
                res.status(401).json(err);
            } else {
                console.log('From restrict-middleware',decodedToken)
                req.user = { username: decodedToken.username };
                console.log("user from middleware", req.user)
                next();
            }
        });
    } else {
        res.status(403).json({ message: 'User is not logged in!' });
    }
        
}