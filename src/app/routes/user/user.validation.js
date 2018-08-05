import Joi from 'joi';

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
            name: Joi.string().alphanum().min(3).max(30).required().required(),
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
        }
    },
    
    login: {
        body:{
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
        }
    }
}