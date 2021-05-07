const router = require('express').Router()
const registerController = require('../controller/register')

router.post('/insert', (req, res) => {
    registerController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    registerController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    registerController.getById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

module.exports = router