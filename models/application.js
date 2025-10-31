const getdB = require('./db')


const getAllApplications = async () =>{
    const query = 'select * from applications'
    const db = await getdB()
    const results = await db.all(query)
    return results
}

//for advertiser
const getApplicationsAdvertiser = async(id_user) =>{
    const query = 'select * from applications where advertiser_id = ?'
    const db = await getdB()
    const results = await db.all(query, id_user)
    return results
}
//for users
const getApplicationsUser = async(id_user) =>{
    const query = 'select * from applications where people_id = ?'
    const db = await getdB()
    const results = await db.all(query, id_user)
    return results
}

const getApplication = async (id) => {
    const query = 'select * from applications where id = ?'
    const db = await getdB()
    const results = await db.get(query, id)
    return results
}

const postApplication = async (advertisement_id, people_id, advertiser_id, comments) =>{
    const query = 'insert into applications (advertisement_id, people_id, advertiser_id, comments) values (?, ?, ?, ?)'
    const db = await getdB()
    const results = await db.run(query, advertisement_id, people_id, advertiser_id, comments)
    return results
}

const editApplication = async (advertisement_id, people_id, advertiser_id, comments, id) =>{
    const query = 'update applications set advertisement_id = ?, people_id = ?, advertiser_id = ?, comments = ? where id = ?'
    const db = await getdB()
    const results = await db.run(query, advertisement_id, people_id, advertiser_id, comments, id)
    return results
}

const editApplicationUser = async (advertisement_id, people_id, advertiser_id, comments, id) =>{
    const query = 'update applications set advertisement_id = ?, people_id = ?, advertiser_id = ?, comments = ? where id = ?'
    const db = await getdB()
    const results = await db.run(query, advertisement_id, people_id, advertiser_id, comments, id)
    return results
}

const deleteApplication = async (id) =>{
    const query = 'delete from applications where id = ?'
    const db = await getdB()
    const results = await db.run(query, id)
    return results
}

module.exports = {getAllApplications, getApplicationsAdvertiser, getApplicationsUser, getApplication, postApplication, editApplication, editApplicationUser, deleteApplication}