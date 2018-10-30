import ProfileModel from "../../models/profile/profile.model";

export default class ProfileController {

    static createProfile(req, res) {
        ProfileModel.create('user_profile', req.body)
            .then(result => {
                res.status(200).send(result);
            })
            .catch(error => {
                res.status(500).send({
                    message: error.message || 'Some error ocured while creating the profile.'
                });
            });
    }

    static findProfileByUserId(req, res) {
        ProfileModel.findBy('user_profile', req.params.field, req.params.value)
            .then(profile => {
                res.status(200).send(profile);
            })
            .catch(error => {
                res.status(500).send({
                    status:500,
                    message: error.message || 'Some error ocurred while retrieving profile.'
                });
            });
    }

    static updateProfile(req, res) {
        ProfileModel.update('user_profile', req.params.profileId, req.body)
            .then(result => {
                res.status(200).send(result);
            })
            .catch(error => {
                res.status(500).send({
                    status:400,
                    message: error.message || 'Some error ocured while updating the profile.'
                });
            });
    }

    static deleteProfile(req, res) {
        ProfileModel.delete('user_profile', req.params.profileId)
            .then(result => {
                res.status(200).send(result);
            })
            .catch(error => {
                res.status(400).send({
                    status:400,
                    message: error.message || 'ESome error ocured while deleting the profile.'
                });
            });
    }
}
