const getDb = require('./db')

const getPeoples = async()=>{
    const query = 'select * from people'
    const db = await getDb()
    const results = db.all(query)
    return results
}

const getPeople = async(id)=>{
    const query = 'select * from people where id = ?'
    const db = await getDb()
    const results = db.get(query, id)
    return results
}

const postPeople = async(name, firstname, email, password, sex, cities_id, role_id)=>{
    const query = 'insert into people(name, firstname, email, password, sex, cities_id, role_id) VALUES (?,?,?,?,?,?,?)'
    const db = await getDb()
    const results = db.run(query, name, firstname, email, password, sex, cities_id, role_id)
    return results
}

const putPeople = async(name, firstname, email, password, sex, cities_id, role_id, id)=>{
    const query = 'update people set name = ?, firstname = ?, email = ?, password = ?, sex = ?, cities_id = ?, role_id = ? where id = ?'
    const db = await getDb()
    const results = db.run(query, name, firstname, email, password, sex, cities_id, role_id, id)
    return results
}

const putPeopleUser = async(name, firstname, email, password, sex, cities_id, id)=>{
    const query = 'update people set name = ?, firstname = ?, email = ?, password = ?, sex = ?, cities_id = ? where id = ?'
    const db = await getDb()
    const results = db.run(query, name, firstname, email, password, sex, cities_id, id)
    return results
}

const deletePeople = async(id)=>{
    const query = 'delete from people where id = ?'
    const db = await getDb()
    const results = db.run(query, id)
    return results
}

const deletePeopleUser = async(id)=>{
    const query = 'delete from people where id = ?'
    const db = await getDb()
    const results = db.run(query, id)
    return results
}

module.exports = {getPeoples, getPeople, postPeople, putPeople, putPeopleUser, deletePeople, deletePeopleUser}