import {Router} from 'express';
import ProductController from '../api/controller/ProductController';
import Auth from '../config/middleware/auth';

const routes = Router();

routes.post('/product-register', Auth, ProductController.ResgisterProduct);
routes.put('/product-edit', Auth, ProductController.UpdateProduct);
routes.delete('/product-delete', Auth, ProductController.DeleteProduct);
routes.get('/product-list', Auth, ProductController.ListProduct);

export default routes;