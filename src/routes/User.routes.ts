import {Router} from 'express';
import UserController from '../api/controller/UserController';
import Auth from '../config/middleware/auth';

const routes = Router();

routes.post('/user-register', UserController.RegisterUser);
routes.put('/user-edit', Auth, UserController.UpdateUser);
routes.delete('/user-delete', Auth, UserController.DeleteUser);
routes.get('/user-list', Auth, UserController.ListUser);
export default routes;