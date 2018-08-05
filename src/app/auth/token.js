import { moment, jwt, secret } from "../../config/consts";

export default class Token {


    static generate(user) {
        return jwt.sign({ id: user.id }, secret.key, {
            expiresIn: 86400
        })
    }

    static verify(token, next) {
        let resultVerify;
        if (!token) {
            resultVerify = {
                status: 404,
                message: 'Token not found'
            }
        } else if (jwt.decode(token, secret.key) <= moment().format('x')) {
            resultVerify = {
                status: 401,
                message: 'Token has expired'
            }
        } else {
            resultVerify = null;
        }

        return new Promise(resolve => {
            resolve(resultVerify)
        })
    }

}