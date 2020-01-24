const express = require('express');

const Tasks = require('./tasks-model.js');
const Projects = require('../projects/projects-model.js');

const router = express.Router();


router.get('/:id', validateProjectId, (req,res)=> {
    Tasks.get(req.params.id)
    .then(task => {
        res.json(task);
    })
    .catch(error => {
        res.status(500).json({
            error: "Unable to get tasks."
        })
    })
})

router.post('/:id', validateProjectId, (req,res) => {
    const body = req.body;

    Tasks.insert(body)
    .then(task => {
        res.status(201).json(task);
    })
    .catch( error => {
        res.status(500).json({
            message: "Unable to create new task"
        })
    })

   
})

function validateProjectId(req,res,next){
    const id = req.params.id;
    Projects.getById(id)
    .then(verify => {
        if(verify){
            req.project = id;
            next();
        } else {
            res.status(404).json({
                error: "Project not found -- Middleware"
            })
        }
    })
}

router.use(validateProjectId);

module.exports = router;