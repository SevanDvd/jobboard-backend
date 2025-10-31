const Job = require('../models/job')

exports.getJobs = async (req, res)=>{
    try{
        const results = await Job.getAllJobs()
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.getAllJobsUser = async(req, res)=>{
    try{
        const results = await Job.getAllJobsUser(req.user.id)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'server error'})
    }
}

exports.getJobById = async(req, res)=>{
    try{
        const result = await Job.getJob(req.params.id)
        res.json(result)
    }catch(err){
        console.error(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.getJobByCompanyId = async(req, res)=>{
    try{
        const result = await Job.getJobByCompanyId(req.params.company_id)
        res.json(result)
    }catch(err){
        console.error(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.postJob = async (req, res) =>{
    const { company_id, title, cities_id, salary, contract_type, description } = req.body;
    const { id_user } = req.user.id
    try{
        const results = await Job.postJob(company_id, id_user, title, cities_id, salary, contract_type, description)
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.putJob = async (req, res) =>{
    const { company_id, id_user, title, cities_id, salary, contract_type, description } = req.body
    const { id } = req.params
    try{
        const results = await Job.editJob(company_id, id_user, title, cities_id, salary, contract_type, description, id)
        if (results.changes===0) return res.status(404).json({message : 'Job not found'})
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.putJobUser = async (req, res)=>{
    const { company_id, title, cities_id, salary, contract_type, description} = req.body
    const id = parseInt(req.params.id)
    const user_id = parseInt(req.user.id)
    try{
        const results = await Job.editJobUser(company_id, title, cities_id, salary, contract_type, description, id, user_id)
        if (results.changes===0) return res.status(404).json({message : 'Job not found'})
        res.json(results)
    }catch(err){
        console.error(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.deleteJob = async (req, res) =>{
    try{
        const results = await Job.deleteJob(req.params.id)
        if (results.changes===0) return res.status(404).json({message : 'Job not found'})
        res.json(results)
    }catch(err){
        console.log(err)
        res.status(500).json({message : 'server error'})
    }
}

exports.deleteJobUser = async(req, res) =>{
    try{
        const results = await Job.deleteJobUser(req.params.id, req.user.id)
        if (results.changes===0) return res.status(404).json({message : 'Job not found'})
        res.json(results)   
    }catch(err){
        console.log(err)
        res.status(500).json({message : 'server error'})
    }
}