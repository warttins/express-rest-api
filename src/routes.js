const express = require('express');
const ProductsController = require('./app/controllers/ProductsController');

const productsRoute = express.Router();

// Products routes
productsRoute.get('/', ProductsController.index);
productsRoute.get('/:id', ProductsController.show);
productsRoute.delete('/:id', ProductsController.delete);

module.exports = { productsRoute };
