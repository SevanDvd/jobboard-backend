const getDb = require('./db')

const getCities = async ()=>{
    const query = 'select * from cities'
    const db = await getDb()
    const results = await db.all(query)
    return results
}

const getCity = async(id)=>{
    const query = 'select * from cities where id = ?'
    const db = await getDb()
    const results = await db.get(query,id)
    return results
}

const postCity = async(zip, name)=>{
    const query = 'insert into cities (zip, name) values (?,?)'
    const db = await getDb()
    const results = await db.run(query, zip, name)
    return results
}

const editCity = async(zip, name, id)=>{
    const query = 'update cities set zip = ?, name = ? where id = ?'
    const db = await getDb()
    const results = await db.run(query, zip, name, id)
    return results.changes
}

const deleteCity = async(id)=>{
    const query = 'delete from cities where id = ?'
    const db = await getDb()
    const results = await db.run(query, id)
    return results.changes
}


module.exports = {getCities, getCity, postCity, editCity, deleteCity}