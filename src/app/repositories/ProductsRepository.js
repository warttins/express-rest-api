const products = require('../../mocks/products');

class ProductsRepository {
  static findAll() {
    return new Promise((resolve) => {
      resolve(products);
    });
  }
}

module.exports = ProductsRepository;
