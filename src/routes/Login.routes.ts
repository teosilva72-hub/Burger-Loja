import {Router} from 'express';
import LoginController from '../api/controller/LoginController';
const routes = Router();

routes.post('/login', LoginController.Login);

export default routes;