let Email = require('../models/emails').Email;

// unique id package
let uniqid = require('uniqid');

// connect express to posts.js file (this file)
let express = require('express');

// this Router object will help redirect requests from one file to another
let router = express.Router();

let authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, async (req, resp) => {
    resp.send(await Email.find());
});

router.post('/', async (req, resp) => {
    let reqBody = req.body;
    let newEmail = new Email({
        id: uniqid(),
        name: reqBody.name,
        text: reqBody.text,
        email: reqBody.email,
        date: new Date()
    })
    await newEmail.save()
    resp.send('Accepted');
});
router.delete('/:id', authMiddleware, async (req, resp) => {
    await Email.deleteOne({id: req.params.id});
    resp.send('Deleted');
});

module.exports = router;

