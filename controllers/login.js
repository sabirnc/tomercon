const User = require("../models/user")
const jwt = require("jsonwebtoken")


// create token 
const createToken = (id) => {
  const payload  = {
    id:id
  } 
  const token  = jwt.sign(payload, "secret key")
  return token
}

const login = async (req , res ) => {
    const { email , password } = req.body
    try {
      const user = await User.findOne({email:email})
      if(user){
        if(user.password === password) {
            const token = createToken(user._id)
            return res.status(200).json(token)
        }
        throw Error("incorrect password")
      } else {
        throw Error("dont have account? register")
      }
    }
    catch(err) {
       res.status(400).json(err.message)
    }
}


module.exports = { login }