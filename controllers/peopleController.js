const People = require('../models/people')

exports.getAllPeople = async(req, res)=>{
    try{
        const results = await People.getPeoples()
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.getPeople = async(req, res)=>{
    try{
        const results = await People.getPeople(req.params.id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.postPeople = async(req, res)=>{
    try{
        const {name, firstname, email, password, sex, cities_id, role_id} = req.body
        const results = await People.postPeople(name, firstname, email, password, sex, cities_id, role_id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.editPeople = async(req, res)=>{
    try{
        const {name, firstname, email, password, sex, cities_id, role_id} = req.body
        const {id} = req.params
        const results = await People.putPeople(name, firstname, email, password, sex, cities_id, role_id, id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.editPeopleUser = async(req, res)=>{
    try{
        const {name, firstname, email, password, sex, cities_id} = req.body
        const {id} = req.user.id
        const results = await People.putPeopleUser(name, firstname, email, password, sex, cities_id, id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.deletePeople = async(req, res)=>{
    try{
        const results = People.deletePeople(req.params.id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.deletePeopleUser = async(req, res)=>{
    try{
        const results = People.deletePeopleUser(req.user.id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}