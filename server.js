const express = require('express');

const projectRouter = require('./projects/projectsRouter');
const taskRouter = require('./tasks/tasksRouter');
const resourceRouter = require('./resources/resourcesRouter');

const server = express();

server.use(express.json());

server.get('/', (req,res)=> {
    res.status(200).json({
        message: "Sprint Time"
    })
})

server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;