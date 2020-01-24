const db = require("../data/db-config.js");

module.exports = {
    get,
    getById,
    insert
}

function get(){
    return db.select('*').from('resources');
}

function getById(resourceId){
    return db('resources')
    .where({id: resourceId})
    .first();
}

function insert(resource){
    return db('resources').insert(resource)
    .then(([id]) => {
        return getById(id);
    })
}