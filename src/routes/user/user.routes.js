import UserController from "../../app/controllers/user/user.controller";


export default class UserRoutes{

    static routes(app){
        app.post('/user', UserController.createUser);
        //app.get('/user', UserController.findAllUsers);
        //app.get('/user/:userId', UserController.findOneUser);
        //app.put('/user/:userId', UserController.updateUser);
        //app.delete('/user/:userId', UserController.deleteUser);
    }
}