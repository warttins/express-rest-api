const products = require('../../mocks/products');

class ProductsRepository {
  static findAll() {
    return new Promise((resolve) => {
      resolve(products);
    });
  }

  static findById(id) {
    return new Promise((resolve) => {
      const filteredProduct = products.find((product) => product.id === id);
      resolve(filteredProduct);
    });
  }
}

module.exports = ProductsRepository;
