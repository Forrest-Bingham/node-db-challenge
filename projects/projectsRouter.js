const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req,res)=> {
    Projects.get()
    .then(project => {
        res.json(project);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'failed to load projects'
        })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project -- Error 500' });
    });
  });



router.post('/', (req,res)=> {
    const body = req.body;

    Projects.insert(body)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: "Failed to create new project"
        })
    })
})

module.exports = router;