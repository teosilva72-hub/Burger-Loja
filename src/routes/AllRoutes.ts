import { Router } from "express";
import Login from './Login.routes';
import User from './User.routes';
import Product from './Product.routes';
const routes = Router();

routes.use(Login);
routes.use(User);
routes.use(Product);

export default routes;