const express = require("express")
const router = express.Router()

//controller functions
const { register } = require("../controllers/register")
const { login } = require("../controllers/login")
const { home } = require("../controllers/home")

//middlewares
const { requireAuth } = require("../middlewares/requireAuth")




router.post("/register", register)
router.post("/login" , login)
router.get("/home", requireAuth ,home)

module.exports = router