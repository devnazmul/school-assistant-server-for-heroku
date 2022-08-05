const express   = require('express');
const router    = express.Router();
const controllers = require('../../controllers').student;

router.get('/test',controllers.test)
module.exports = router;