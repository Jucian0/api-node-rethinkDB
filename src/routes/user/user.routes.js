import UserController from "../../app/controllers/user/user.controller";
import Auth from "../../app/auth/auth";
import AuthController from "../../app/controllers/auth/auth.controller";


export default class UserRoutes{

    static routes(app){
        app.post('/login', AuthController.login);
        app.post('/users', UserController.createUser);
        app.get('/users',Auth.authorize, UserController.findAllUser);
        app.get('/users/:userId', UserController.findOneUser);
        app.put('/users/:userId', UserController.updateUser);
        app.delete('/users/:userId', UserController.deleteUser);
    }
}