const express = require('express');

const router = new express.Router();

router.get('/test', async (req, resp) => {
    resp.send('new file router')
} )

module.exports = router