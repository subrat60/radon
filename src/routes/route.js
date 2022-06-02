const express = require('express');
//const externalModule = require('./logger')

const router = express.Router();
const subrat =require('../logger/logger')
const date = require('../util/helper')
const cut = require('../validator/formatter')
const month = require('../util/helper')
const batch = require('../util/helper')
const change = require('../validator/formatter')
const upper = require('../validator/formatter')



router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // externalModule.log()
    //res.send('My first ever api!')
    subrat.welcome()
    date.printdate()
    month.printmonth()
    batch.getBatchInfo()
    cut.trim()
    change.changetoLowerCase()
    upper.changetoUpperCase()


   

});

router.get('/test-me1', function (req, res) {
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason