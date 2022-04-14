let express = require('express');
let router = express.Router();

const controller = require('../controllers/mainController.js');

router.get('/', controller.index);
router.get('/about', controller.about);


module.exports = router;