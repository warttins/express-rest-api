let products = require('../../mocks/products');

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

  static delete(id) {
    return new Promise((resolve) => {
      const newProductsList = products.filter((product) => product.id !== id);
      products = newProductsList;
      resolve();
    });
  }
}

module.exports = ProductsRepository;
