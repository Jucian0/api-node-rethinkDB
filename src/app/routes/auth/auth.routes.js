import AuthController from "../../controllers/auth/auth.controller";
import validation from 'express-validation/lib';
import userValidation from "./../user/user.validation";

export default class AuthRoutes{

    static routes(app){
        app.post('/', validation(userValidation.login), AuthController.login);
        app.post('/register', validation(userValidation.createUser), userValidation.userExist, AuthController.register);
    }
}