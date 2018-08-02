import UserModel from "../../models/user/user.model";
import Auth from "../../auth/auth";
import Token from "../../auth/token";

export default class AuthController {

    static login(req, res) {
        UserModel.findBy('users', 'email', req.body.email)
            .then((user) => {
                user = user[0];

                if (!user) {
                    return res.status(404).send({
                        status: 404,
                        message: 'User not found'
                    })
                };

                Auth.authenticate(req.body.password, user.password)
                    .then((authenticate) => {
                        if (authenticate) {
                            let currentUser = {
                                name: user.name,
                                email: user.email,
                                token: Token.generate(user)
                            };
                            res.status(200).send(currentUser);
                        } else {
                            return res.status(401).send({
                                status: 401,
                                message: 'Authentication failed'
                            })
                        }
                    })
            })
    }
}