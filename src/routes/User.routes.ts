import express,{Router} from 'express';
import UserController from '../api/controller/UserController';
import Auth from '../config/middleware/auth';
import Upload from '../config/upload/files';

const routes = Router();

routes.post('/user-register',Upload.array('photo', 1), UserController.RegisterUser);
routes.put('/user-edit', Auth, Upload.array('photo', 1), UserController.UpdateUser);
routes.delete('/user-delete', Auth, UserController.DeleteUser);
routes.get('/user-list', Auth, UserController.ListUser);
routes.get('/user-logado', Auth, UserController.GetUserLogado);
routes.post('/recover-pass', UserController.RecoverPass);

export default routes;  