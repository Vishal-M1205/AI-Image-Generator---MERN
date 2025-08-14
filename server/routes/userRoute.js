import {registerUser,userCredit,userLogin} from "../controllers/userController.js"
import express from 'express';
import userAuth from "../middlewares/auth.js";


const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',userLogin);
userRouter.post('/credits',userAuth,userCredit);

export default userRouter;