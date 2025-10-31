const City = require('../models/city')

exports.getCities= async(req, res)=>{
    try{
        const results = await City.getCities()
        res.json(results)
    }catch(err){
        console.log(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.getCityById = async (req,res)=>{
    try{
        const results = await City.getCity(req.params.id)
        res.json(results)
    }catch(err){
        console.log(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.postCity = async (req,res)=>{
    try{
        const results = await City.postCity(req.body.zip, req.body.name)
        res.json(results)
    }catch(err){
        console.log(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.editCity = async (req, res) =>{
    try{
        const results = await City.editCity(req.body.zip, req.body.name, req.params.id)
        res.json(results)
    }catch(err){
        console.log(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.deleteCity = async(req, res) =>{
    try{
        const results = await City.deleteCity(req.params.id)
        res.json(results)
    }catch(err){
        console.log(err)
        res.status(500).json({message : 'server error'})
    }
}