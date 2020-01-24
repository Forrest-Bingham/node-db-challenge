const express = require('express');

const Resources = require('./resources-model');

const router = express.Router();


router.get('/', (req,res) => {
    Resources.get()
    .then(resource => {
        res.json(resource);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            error: "Unable to load resources"
        })
    })
})

router.post('/', (req,res)=> {
    const body = req.body;
    Resources.insert(body)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: "Unable to add resource"
        })
    })
})



module.exports = router;