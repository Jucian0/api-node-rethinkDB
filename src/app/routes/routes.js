import UserRoutes from "./user/user.routes";
import ProfileRoutes from "./profile/profile.routes";
import AuthRoutes from './auth/auth.routes';

export default function mainRoutes(app) {
  AuthRoutes.routes(app);
  UserRoutes.routes(app);
  ProfileRoutes.routes(app);
}
