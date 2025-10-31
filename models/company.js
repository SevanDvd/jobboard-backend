const getDb = require('./db')

const getCompanies = async()=>{
    const query = 'select * from companies'
    const db = await getDb()
    const results = db.all(query)
    return results
}

const getCompany = async(id)=>{
    const query = 'select * from companies where id = ?'
    const db = await getDb()
    const results = db.get(query, id)
    return results
}

const postCompany = async(name, cities_id, description)=>{
    const query = 'insert into companies (name, cities_id, description) VALUES (?,?,?)'
    const db = await getDb()
    const results = db.run(query, name, cities_id, description)
    return results
}

const putCompany = async(name, cities_id, description, id)=>{
    const query = 'update companies set name = ?, cities_id = ?, description = ? where id = ?'
    const db = await getDb()
    const results = db.run(query, name, cities_id, description, id)
    return results
}

const deleteCompany = async(id)=>{
    const query = 'delete from companies where id = ?'
    const db = await getDb()
    const results = db.run(query, id)
    return results
}

module.exports = {getCompanies, getCompany, postCompany, putCompany, deleteCompany}

