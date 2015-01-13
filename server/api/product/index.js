'use strict';

var express = require('express');
var controller = require('./product.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/search/:searchTerm', controller.searchTerm)
router.get('/category/:searchCat', controller.searchCat)
router.get('/search/:searchTerm/:searchCat', controller.searchByCat)
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;