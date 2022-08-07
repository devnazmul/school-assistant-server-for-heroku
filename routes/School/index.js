const express   = require('express');
const router    = express.Router();
const controllers = require('../../controllers').school;

router.get('/test',controllers.test)
router.get('/',controllers.all)
router.get('/create',controllers.create)
router.get('/find',controllers.find)
router.get('/update',controllers.update)
router.get('/delete',controllers.remove)

module.exports = router;