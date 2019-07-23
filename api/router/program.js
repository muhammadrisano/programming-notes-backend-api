const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message = "this is method get all program"
    })
})

router.get('/:idProgram', (req, res, next) => {
    const id = req.params.idProgram
    res.status(200).json({
        message: "this is method get use id program",
        id: id
    })
})
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "this is method post program"
    })
})

router.patch('/:idProgram', (req, res, next) => {
    const id = req.params.idProgram
    res.status(200).json({
        message: "this is method patch program"
    })
})

router.delete('/:idProgram', (req, res, next) => {
    const id = req.params.idProgram
    res.status(200).json({
        message: "this is method delete program"
    })
})