import { Router } from 'express';

import PostController from '../controllers/PostController';

const routes = Router();

const postController = new PostController();

routes.get('/posts', postController.index);

export default routes;
