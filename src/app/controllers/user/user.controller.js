import UserModel from "../../models/user/user.model";
import Auth from "../../auth/auth";


export default class UserController {


    static createUser(req, res) {

        for(let key in req.body){
            if(req.body[key] == undefined){
                return res.status(500).send({
                    status: 500,
                    message: `This field ${key.toUpperCase()} is required`
                });
            };
        };
        Auth.hashPassword(req.body.password)
            .then((hash) => {
                const user = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                }
                UserModel.create('users', user)
                    .then(result => {
                        res.status(200).send(result);
                    })
            });
    }

    static findOneUser(req, res) {
        UserModel.findOne('users', req.params.userId)
            .then(user => {
                res.status(200).send(user);
            })
            .catch(error => {
                console.log(error)
            });
    }

    static findAllUser(req, res) {
        UserModel.findAll('users', req)
            .then(users => {
                res.status(200).send(users);
            })
    }

    static findUserBy(req, res) {
        UserModel.findBy('users', req.params.field, req.params.value)
            .then(user => {
                res.status(200).send(user);
            })
    }

    static updateUser(req, res) {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        UserModel.update('users', req.params.userId, user)
            .then(result => {
                res.status(200).send(result);
            })
    }

    static deleteUser(req, res) {
        UserModel.delete('users', req.params.userId)
            .then(result => {
                res.status(200).send(result);
            })
            .catch(error => {
            });
    }

}