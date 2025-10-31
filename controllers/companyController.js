const Company = require('../models/company')

exports.getCompanies = async(req, res)=>{
    try{
        const results = await Company.getCompanies()
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.getCompanyById = async(req, res)=>{
    try{
        const results = await Company.getCompanyById(req.params.id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.postCompany = async(req, res)=>{
    try{
        const results = await Company.postCompany(req.body.name, req.body.cities_id, req.body.description)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.putCompany = async(req, res)=>{
    try{
        const results = await Company.putCompany(req.body.name, req.body.cities_id, req.body.description, req.params.id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.deleteCompany = async(req, res)=>{
    try{
        const results = await Company.deleteCompany(req.params.id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message : 'server error'})
    }
}