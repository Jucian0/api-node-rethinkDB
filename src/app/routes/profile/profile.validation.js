import Joi from 'joi';

export default {
    createProfile:{
        body: {
            userId: Joi.string().required(),
            photo: Joi.string().allow(null).optional(),
            email: Joi.string().email({minDomainAtoms: 2}).allow(null).optional(),
            phone: Joi.string().required(),
            biographic: Joi.string().min(100).max(300).allow(null).optional(),
            links: Joi.string().allow(null).optional(),
            city: Joi.string().allow(null).optional(),
            professional_interest: Joi.string().allow(null).optional(),
            distance_interest: Joi.string().allow(null).optional()
        }
    },

    getByUserId: {
        params: {
            userId: Joi.string().required()
        }
    },

    updateProfile:{
        body: {
            userId: Joi.string().required(),
            photo: Joi.string(),
            email: Joi.string().email({minDomainAtoms: 2}),
            phone: Joi.string().required(),
            biographics: Joi.string().min(100).max(300),
            links: Joi.array(),
            city: Joi.string().required(),
            professional_interest: Joi.array(),
            distance_interest: Joi.array().items(Joi.string())
        }
    },

    delete: {
        params: {
            profileId: Joi.string().required()
        }
    },
}