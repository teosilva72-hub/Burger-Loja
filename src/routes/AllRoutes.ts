import { Router } from "express";
import Login from './Login.routes';
import User from './User.routes';

const routes = Router();

routes.use(Login);
routes.use(User);

export default routes;