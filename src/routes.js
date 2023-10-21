const express = require('express');
const ProductsController = require('./app/controllers/ProductsController');

const productsRoute = express.Router();

// Products routes
productsRoute.get('/', ProductsController.index);

module.exports = { productsRoute };
