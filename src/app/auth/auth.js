import Token from "./token";
import { resolve } from "url";
import { bycrypt } from "../../config/consts";
//import Promise from 'bluebird';


export default class Auth{

    static authorize(req, res, next){
        let apiToken = req.headers['x-api-token'];
        Token.verify(apiToken, next);
        next();
    }

    static hashPassword(password){
        return new Promise((resolve, reject)=>{
            bycrypt.genSalt(10, (error, salt)=>{
                if(error) return reject(error);

                bycrypt.hash(password, salt, (error, hash)=>{
                    if(error) return reject(error);
                    return resolve(hash);
                });
            });
        });
    }

    static authenticate(password, hash){
        return new Promise((resolve, reject)=>{
            bycrypt.compare(password, hash, (error, res)=>{
                if(error) return reject(error);
                return resolve(res);
            });
        });
    }
}