import productController from '../controllers/productController';
// import {isAuth, isAdmin} from '../utill';
//const router = express.Router();

module.exports =(app) =>{
    app.route('/api/products/').get(productController.getProduct);
    app.route('/api/products/:id').get(productController.getProductById);
    app.route('/api/products/').post(productController.createNewProduct);
    app.route('/api/products/:id').put(productController.updateProduct);
    app.route('/api/products/:id').delete(productController.deleteProduct);

}
