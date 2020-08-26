const express = require('express');
const router = express.Router();
const hash = require('bcrypt');



router.get('/', (req,res) => {
    res.render('home');
});

router.get('/updateItems', (req,res) => {
    res.render('updateItems');
});

router.get('/addServant', (req,res) => {
    res.render('addServant');
});

router.post('/addServant', (req,res) => {
    res.render('addServant');
});
router.post('/addServant/name', (req,res) => {
    res.render('addServant');
});

router.get('/updateServant', (req,res) => {
    res.render('updateServant');
});
router.get('/updateServant/:ID', (req,res) => {
    let id = [req.params.ID];
    console.log(id);
    res.render('updateServant');
});
module.exports = router;