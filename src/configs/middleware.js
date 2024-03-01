import bodyParser from 'body-parser';
const configMiddleware = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
}

export default configMiddleware;