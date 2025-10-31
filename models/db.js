const sqlite3 = require("sqlite3")
const { open } = require("sqlite");
const path = require("path")
console.log(__dirname);

async function getDb (){
    return open({
        filename : path.resolve(__dirname, '../database/data.sqlite'),
        driver: sqlite3.Database
    })
}

module.exports = getDb