const express   = require('express');
const router    = express.Router();
const controllers = require('../../controllers').school;

router.get('/test',controllers.test)
module.exports = router;