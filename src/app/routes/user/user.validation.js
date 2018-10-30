import Joi from 'joi';
import Model from '../../models/model';

export default {
    createUser: {
        body: {
            name: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
        }
    },

    getById: {
        params: {
            userId: Joi.string().required()
        }
    },

    updateUser: {
        body: {
            name: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().email({ minDomainAtoms: 2 }),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        }
    },
    
    login: {
        body:{
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
        }
    },

    userExist: (req, res, next)=>{
        Model.findBy('users', 'email', req.body.email)
            .then(result=>{
                if(result.length > 0) return res.status(400).send({ status:400, message: 'There is a user with this email'});
                next();
            })
    }
}