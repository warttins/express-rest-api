const ProductsRepository = require('../repositories/ProductsRepository');

class ProductsController {
  static async index(_request, response) {
    // Listar todos os registros
    const products = await ProductsRepository.findAll();
    response.json(products);
  }

  static async show(request, response) {
    // Obter um registro
    const { id } = request.params;
    const product = await ProductsRepository.findById(id);

    const productNotFound = !product;

    if (productNotFound) {
      return response.status(404).json({ message: 'Product not found.' });
    }

    return response.json(product);
  }

  // store() {
  //   // Criar novo registro
  // }

  // update() {
  //   // Editar um registro
  // }

  static async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;
    const product = await ProductsRepository.findById(id);

    const productNotFound = !product;

    if (productNotFound) {
      return response.status(404).json({ message: 'Product not found.' });
    }

    await ProductsRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = ProductsController;
