const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Using GET on example route'
    })
});

router.post('/', (req, res, next) => {

    res.status(201).send({
        message: 'Using POST on example route'
    })

});

router.get('/:id', (req, res, next) => {
    console.log(req);
    const id = req.params.id;
    res.status(200).send({
        message: 'Using GET on example route with Id',
        id: id,
    })
});


module.exports = router;