let CallbackRequest = require('../models/callback-requests').CallbackRequest;

// unique id package
let uniqid = require('uniqid');

// connect express to posts.js file (this file)
let express = require('express');

// this Router object will help redirect requests from one file to another
let router = express.Router();

let authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, async (req, resp) => {
    resp.send(await CallbackRequest.find());
});

router.post('/', async (req, resp) => {
    let reqBody = req.body;
    let newRequest = new CallbackRequest({
        id: uniqid(),
        phoneNumber: reqBody.phoneNumber,
        date: new Date()
    })
    await newRequest.save()
    resp.send('Accepted');
});
router.delete('/:id', authMiddleware, async (req, resp) => {
    await CallbackRequest.deleteOne({id: req.params.id});
    resp.send('Deleted');
});

module.exports = router;

