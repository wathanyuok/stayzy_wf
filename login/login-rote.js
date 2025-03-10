const expres = require("express")
const { login } = require("./login")
const LoginRoute = expres.Router()

LoginRoute("/login" , login)

module.exports =  LoginRoute