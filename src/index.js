import {app, logger, bodyParser, cors, helmet} from './config/consts';
import mainRoutes from './app/routes/routes';
import "babel-core/register";
import "babel-polyfill";

import expressValidation from 'express-validation';

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

mainRoutes(app);

app.listen(3000, () => {
  console.log('ES6 application listening on port 3000!');
});
