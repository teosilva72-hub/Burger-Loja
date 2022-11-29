import {Router} from 'express';
import ProductController from '../api/controller/ProductController';
import Auth from '../config/middleware/auth';
import Upload from '../config/upload/files';

const routes = Router();

routes.post('/product-register', Auth, ProductController.ResgisterProduct, Upload.array('photo', 10));
routes.put('/product-edit/:id', Auth, ProductController.UpdateProduct);
routes.delete('/product-delete/:id', Auth, ProductController.DeleteProduct);
routes.get('/product-list', ProductController.ListProduct);
routes.post('/setfiles', Upload.array('photo', 10), ProductController.setFile)

export default routes;