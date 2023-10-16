const jwt = require("jsonwebtoken")



const requireAuth = (req ,res ,next) => {
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(401).json({ error: "Authorization required" });
    }

    const token = authorization.split("")[1]
    try {
        const user = jwt.verify(token , "secret key")
        if(user) {
            next()
        }

    }
    catch(errr) {
        res.status(400).json(err.message)
    }
}

module.exports = { requireAuth }