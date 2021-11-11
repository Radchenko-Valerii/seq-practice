const postRouter = require('express').Router();
const PostController = require('../controllers/postController');

postRouter.post('/:userId', PostController.createPost);
postRouter.get('/', PostController.getPosts);

module.exports = postRouter;