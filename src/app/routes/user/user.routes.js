import AuthController from "../../controllers/auth/auth.controller";
import UserController from "../../controllers/user/user.controller";
import Auth from "../../auth/auth";

export default class UserRoutes{

    static routes(app){
        app.post('/login', AuthController.login);
        app.post('/users', UserController.createUser);
        app.get('/users', Auth.authorize, UserController.findAllUser);
        app.get('/users/:userId', Auth.authorize, UserController.findOneUser);
        app.put('/users/:userId', Auth.authorize, UserController.updateUser);
        app.delete('/users/:userId', Auth.authorize, UserController.deleteUser);
    }
}