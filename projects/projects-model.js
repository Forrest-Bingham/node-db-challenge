const db = require("../data/db-config.js");

module.exports = {
    get,
    getById,
    insert
}

function get(){
    return db.select('*').from('projects')
    
}

function getById(projectId){
    return db('projects')
    .where({id: projectId})
    .first();
}

function insert(project){

    return db('projects').insert(project)
    .then(([id]) => {
        return getById(id);
    })

}