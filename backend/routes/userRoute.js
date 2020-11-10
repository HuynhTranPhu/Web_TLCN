import userController from '../controllers/userController';

//const router = express.Router();
module.exports =(app) =>{
    app.route('/api/users/login').post(userController.userLogIn);
    app.route('/api/users/register').post(userController.userRegister);
    app.route('/api/users/createAdmin').get(userController.createAdmin);
    app.route('/api/users/:id').get(userController.getUser);
}


