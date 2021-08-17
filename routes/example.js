const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Using GET on example route'
    })
});

router.post('/', (req, res, next) => {

    //console.log(req.body);

    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO Test (test_name) VALUES (?)',
            [req.body.name],
            (error, result, field) => {
                // free the connection.
                conn.release(); 

                if ( error ) {

                    res.status(500).send({
                        error: error,
                        response: null
                    });

                }

                res.status(201).send({
                    message: 'Using POST on example route',
                    inserted_id: result.insertId,
                })

            }
        )
    });

});

router.get('/:id', (req, res, next) => {
    //console.log(req);
    const id = req.params.id;

    res.status(200).send({
        message: 'Using GET on example route with Id',
        id: id,
    })
});


module.exports = router;