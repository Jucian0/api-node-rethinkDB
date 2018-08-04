import UserRoutes from "./user/user.routes";

export default function mainRoutes(app){

  UserRoutes.routes(app);
}
