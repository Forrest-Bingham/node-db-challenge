const db = require("../data/db-config.js");

module.exports = {
    
    get,
    getById,
    insert

}

function get(id){
    return db("tasks")
    .select('p.name', 'p.description','tasks.task_name','tasks.notes', 'tasks.completed','tasks.project_id')
    .join('projects as p', 'p.id', 'tasks.project_id')
    .where({project_id: id})
    
}

function getById(taskId){
    return db('tasks')
    .where({id: taskId})
    .first();
}


function insert(task){
    return db('tasks').insert(task)
    .then(([id])=> {
        return getById(id);
    })
}