const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const getDb = require('../models/db')

require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY

exports.register = async(req,res)=>{
    const { name, firstName, email, password, sex, cities_id, role_id } = req.body

    try{
        const hash = await bcrypt.hash(password, 10)

        const query = 'insert into people (name, firstName, email, password, sex, cities_id, role_id) VALUES (?,?,?,?,?,?,?)'
        const db = await getDb()
        await db.run(query, name, firstName, email, hash, sex, cities_id, role_id)
        res.status(201).json({message : 'User registered successfully'})
    }catch(err){
        console.error(err)
        res.status(500).json({ message: 'Server error' })
    }
}

exports.login = async(req, res)=>{
    const {email, password} = req.body

    try{
        const db = await getDb()
        const user = await db.get('select * from people where email = ?', email)
        if (!user) return res.status(401).json({message : "User not found"}) 
        //compare
        const valid = await bcrypt.compare(password, user.password)
        if (!valid) return res.status(401).json({message : "Invalid password"}) 
        //token creation
        const token = jwt.sign({ id : user.id, email : user.email, role : user.role_id}, SECRET_KEY, {expiresIn: '1h'})
        //Stock token as cookie
        res.cookie('token', token, {
        httpOnly: true,
        secure: false, 
        sameSite: 'strict'
        })

        res.json({ message: 'successful connection' })
        
    }catch(err){
        console.error(err)
        res.status(500).json({ message: 'Server error' })
    }
}