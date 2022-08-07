const express   = require('express');
const router    = express.Router();
const controllers = require('../../controllers').teacher;

router.get('/test',controllers.test)
router.get('/',controllers.all)
router.post('/create',controllers.create)
router.post('/find',controllers.find)
router.post('/update',controllers.update)
router.post('/remove',controllers.remove)

module.exports = router;