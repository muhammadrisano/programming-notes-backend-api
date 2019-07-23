const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "this is get all kategori Program"
    })
})

router.get('/:idCategory', (req, res, next) => {
    res.status(200).json({
        message: "this is get by categoi id"
    })
})

router.post('/', (req, nex, next) => {
    res.status(200).json({
        message: "this is method post"
    })
})

router.patch('/:idCategory', (req, res, next) => {
    const id = req.params.idCategory
    res.status(200).json({
        message: "this is method patch",
        id: id
    })
})

router.delete('/:idCategory', (req, res, next) => {
    const id = req.params.idCategory;
    res.status(200).json({
        message: "this is method delete kategori progmam"
    })
})

module.exports = router