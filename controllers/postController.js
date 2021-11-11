const { Post } = require('../models');

module.exports.createPost = async (req, res, next) => {
  try {
    const { body, params: { userId } } = req;

    const newPost = await Post.create({...body, userId});

    res.send(newPost);
  } catch (err) {
    next(err);
  }
}

module.exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll();

    res.send(posts);
  } catch (err) {
    next(err);
  }
}