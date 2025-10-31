const getDb = require('./db')

const getAllJobs = async()=>{
    const query = 'select * from advertisements'
    const db = await getDb()
    const results = db.all(query)
    return results
}

const getAllJobsUser = async(id_user)=>{
    const query = 'select * from advertisements where id_user = ?'
    const db = await getDb()
    const results = db.all(query, id_user)
    return results
}

const getJob = async(id)=>{
    const query = 'select * from advertisements where id = ?'
    const db = await getDb()
    const results = await db.get(query, id)
    return results
}

const getJobByCompanyId = async(company_id)=>{
    const query = 'select * from advertisements where company_id = ?'
    const  db = await getDb()
    const results = await db.all(query, company_id)
    return results
}

const postJob = async(company_id, id_user, title, cities_id, salary, contract_type, description)=>{
    const query = 'insert into advertisements (company_id, id_user, title, cities_id, salary, contract_type, description) values (?,?,?,?,?,?,?)'
    const db = await getDb()
    const results = await db.run(query, company_id, id_user, title, cities_id, salary, contract_type, description)
    return results
}

const editJob = async(company_id, id_user, title, cities_id, salary, contract_type, description, id)=>{
    const query = 'update advertisements set company_id = ?, title = ?, cities_id = ?, salary = ?, contract_type = ?, description = ? where id = ?'
    const db = await getDb()
    const results = await db.run(query, company_id, id_user, title, cities_id, salary, contract_type, description, id)
    return results.changes
}

const editJobUser = async(company_id, title, cities_id, salary, contract_type, description, id, id_user)=>{
    const query = 'update advertisements set company_id = ?, title = ?, cities_id = ?, salary = ?, contract_type = ?, description = ? where id = ? and id_user = ?'
    const db = await getDb()
    const results = await db.run(query, company_id, title, cities_id, salary, contract_type, description, id, id_user)
    return results.changes
}

const deleteJob = async(id)=>{
    const query = 'delete from advertisements where id = ?'
    const db = await getDb()
    const results = await db.run(query, id)
    return results.changes
}

const deleteJobUser = async(id, id_user)=>{
    const query = 'delete from advertisements where id = ? and id_user = ?'
    const db = await getDb()
    const results = await db.run(query, id, id_user)
    return results.changes
}

module.exports = {getAllJobs, getAllJobsUser, getJob, getJobByCompanyId, postJob, editJob, editJobUser, deleteJob, deleteJobUser}