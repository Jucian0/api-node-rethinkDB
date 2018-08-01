import UserModel from "../../models/user/user.model";


export default class UserController{


    static createUser(req, res){
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        UserModel.save('users', user)
            .then(result=>{
                res.status(200).send(result);
            })
    }
}