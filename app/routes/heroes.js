const router = require('express').Router();
const controller = require('app/controllers/heroes');

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;