import UserModel from "../../models/user/user.model";
import Auth from "../../auth/auth";


export default class UserController {


    static createUser(req, res) {
        Auth.hashPassword(req.body.password)
            .then((hash) => {
                const user = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    location: req.body.location,
                    distance: req.body.distance 
                }
                UserModel.create('users', user)
                    .then(result => {
                        res.status(200).send(result);
                    })
                    .catch(error => {
                        res.status(500).send({
                            status: 500,
                            message: error.message || 'Some error ocured while creating the user.'
                        });
                    });
            });
    }

    static findOneUser(req, res) {
        UserModel.findOne('users', req.params.userId)
            .then(user => {
                res.status(200).send(user);
            })
            .catch(error => {
                res.status(404).send({
                    status:404,
                    message: `User not found with id ${req.params.userId}`
                });
            });
    }

    static findAllUser(req, res) {
        UserModel.findAll('users', req)
            .then(users => {
                res.status(200).send(users);
            })
            .catch(error=>{
                res.status(500).send({
                    status:500,
                    message: error.message || 'Some error ocurred while retrieving users.'
                });
            });
    }

    static findUserBy(req, res) {
        UserModel.findBy('users', req.params.field, req.params.value)
            .then(user => {
                res.status(200).send(user);
            })
            .catch(error=>{
                res.status(500).send({
                    status: 500,
                    message: error.message || 'Some error ocurred while retrieving users.'
                });
            });
    }

    static updateUser(req, res) {
        Auth.hashPassword(req.body.password)
        .then((hash) => {
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: hash,
                location: req.body.location,
                distance: req.body.distance 
            }
            UserModel.update('users', req.params.userId, user)
                .then(result => {
                    res.status(200).send(result);
                })
                .catch(error => {
                    res.status(500).send({
                        status:500,
                        message: error.message || 'Some error ocured while updating the user.'
                    });
                });
        });
    }

    static deleteUser(req, res) {
        UserModel.delete('users', req.params.userId)
            .then(result => {
                res.status(200).send(result);
            })
            .catch(error => {
                res.status(500).send({
                    status:500,
                    message: error.message || 'Some error ocured while updating the user.'
                });
            });
    }

}