const jwt = require("jsonwebtoken")
module.exports = (req, res, next) => {
    const authError = {
        message: "Invalid credentials",
    }
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, "KEEP THIS SECRET", (err, decodedToken) => {
            if(err) {
                res.status(401).json(err);
            } else {
                console.log('From restrict-middleware',decodedToken)
                req.user = { username: decodedToken.username };
                next();
            }
        });
    } else {
        res.status(403).json({ message: 'User is not logged in!' });
    }
        
}