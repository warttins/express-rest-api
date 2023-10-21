const ProductsRepository = require('../repositories/ProductsRepository');

class ProductsController {
  static async index(_request, response) {
    // Listar todos os registros
    const products = await ProductsRepository.findAll();
    response.json(products);
  }

  // show() {
  //   // Obter um registro
  // }

  // store() {
  //   // Criar novo registro
  // }

  // update() {
  //   // Editar um registro
  // }

  // delete() {
  //   // Deltar um registro
  // }
}

module.exports = ProductsController;
