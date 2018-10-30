import profileValidation from "./profile.validation";
import ProfileController from "../../controllers/profile/profile.controller";

import validation from 'express-validation';

export default class ProfileRoutes{

    static routes(app){
        app.post('/profile', validation(profileValidation.createProfile), ProfileController.createProfile);
        app.get('/profile', validation(profileValidation.getByUserId), ProfileController.findProfileByUserId);
        app.put('/profile/:profileId', validation(profileValidation.updateProfile), ProfileController.updateProfile);
        app.delete('/profile/:profileId', validation(profileValidation.delete), ProfileController.deleteProfile);
    }
}