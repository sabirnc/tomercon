const User = require("../models/user")




//handle error for register function
const handleError = (err) => {
    const error = {
        username:null,
        email:null,
        password:null
    }
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
          error[properties.path] = properties.message;
        });
        console.log(error)
        return error;
    }

    if(err.code === 11000){
        if (err.keyPattern.hasOwnProperty('username')) {
            error.username = "This name is already taken";
        }
        if(err.keyPattern.hasOwnProperty("email")){
            error.email = "This email is already taken"
        }

        return error
    }
}


const register =  async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await User.create({
            username,
            email,
            password
        })

        res.status(200).json(user)
    }
    catch (err) {
        const error = handleError(err)
        res.status(400).json(error)
    }
}

module.exports = { register }
