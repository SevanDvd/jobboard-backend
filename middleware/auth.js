// Middleware to authentify user
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET_KEY = process.env.SECRET_KEY

module.exports = (req, res, next)=>{

    const token = req.cookies?.token

    if (!token) return res.status(401).json({ message: 'No token provided' })

    jwt.verify (token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' })
        req.user = user
        next()
    })
}