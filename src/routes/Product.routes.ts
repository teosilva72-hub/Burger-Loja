import {Router} from 'express';
import ProductController from '../api/controller/ProductController';
import Auth from '../config/middleware/auth';

const routes = Router();

routes.post('/product-register', Auth, ProductController.ResgisterProduct);
routes.put('/product-edit/:id', Auth, ProductController.UpdateProduct);
routes.delete('/product-delete/:id', Auth, ProductController.DeleteProduct);
routes.get('/product-list', ProductController.ListProduct);

export default routes;