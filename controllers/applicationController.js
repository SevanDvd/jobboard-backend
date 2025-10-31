const Application = require('../models/application')

exports.getApplications = async (req, res)=>{
    try{
        const results = await Application.getAllApplications()
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

// for advertisers
exports.getApplicationsAdvertiser = async(req, res)=>{
    try{
        const results = await Application.getApplicationsAdvertiser(req.params.id_advertiser)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}
// for users
exports.getApplicationsUser = async(req, res)=>{
    try{
        const results = await Application.getApplicationsUser(req.user.id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.getApplicationById = async (req, res)=>{
    try{
        const results = await Application.getApplication(req.params.id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}


exports.postApplication = async (req, res)=>{
    try{
        const results = await Application.postApplication(req.body.advertisement_id, req.body.people_id, req.body.advertiser_id, req.body.comments)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.putApplication = async (req, res)=>{
    try{
        const results = await Application.editApplication(req.body.advertisement_id, req.body.people_id, req.body.advertiser_id, req.body.comments, req.params.id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.putApplicationUser = async (req, res)=>{
    try{
        const id = req.user.id
        const results = await Application.editApplicationUser(req.body.advertisement_id, req.body.people_id, req.body.advertiser_id, req.body.comments, id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.deleteApplication = async (req, res)=>{
    try{
        const results = await Application.deleteApplication(req.params.id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}