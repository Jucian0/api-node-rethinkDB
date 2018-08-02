import { moment, jwt } from "../../config/consts";
import { secret } from "../../config/database";

export default class Token{


    static generate(user){
        return jwt.sign({id: user.id}, secret,{
            expiresIn: 86400
        })
    }

    static verify(token, next){
        if(!token){
            let notFoundError = new Error('Token not found');
            notFoundError.status = 404;
            return next(notFoundError);
        };

        if(jwt.decode(token, secret) <= moment().format('x')){
            let expiredError = new Error('Token has expired');
            expiredError.status = 401;
            return next(expiredError);
        };
    }

}