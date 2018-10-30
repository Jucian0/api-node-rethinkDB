import AuthController from "../../controllers/auth/auth.controller";
import UserController from "../../controllers/user/user.controller";
import Auth from "../../auth/auth";

import validation from 'express-validation';
import userValidation from "./user.validation";

export default class UserRoutes{

    static routes(app){
        app.get('/users', Auth.authorize, UserController.findAllUser);
        app.get('/users/:userId', validation(userValidation.getById), Auth.authorize, UserController.findOneUser);
        app.put('/users/:userId', validation(userValidation.getById), validation(userValidation.updateUser), Auth.authorize, UserController.updateUser);
        app.delete('/users/:userId', validation(userValidation.getById), Auth.authorize, UserController.deleteUser);
    }
}