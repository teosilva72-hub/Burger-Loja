import {Router} from 'express';
import Controller from '../api/controller/ProductController';
import Auth from '../config/middleware/auth';
import Upload from '../config/upload/files';

const routes = Router();

routes.post('/register-product', Auth, Controller.ResgisterProduct, Upload.array('photo', 10));
routes.get('/product-list', Controller.List);

export default routes;