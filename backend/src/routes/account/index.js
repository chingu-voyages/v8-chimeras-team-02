var express = require('express');
var router = express.Router();
router.get('/confirmation/:token', async function (req, res, next) {
    await activateAccount(req.params.token);
});

module.exports = router;
