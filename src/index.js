import {app, logger, bodyParser, cors, helmet} from './config/consts';
import mainRoutes from './routes/routes';


app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

mainRoutes(app);

app.listen(3000, () => {
  console.log('ES6 application listening on port 3000!');
});
