import express from 'express';
import userAuth from '../middlewares/auth.js';
import { imageGen } from '../controllers/imageController.js';

const imageRouter = express.Router();
imageRouter.post('/generate-image',userAuth,imageGen);

export default imageRouter;