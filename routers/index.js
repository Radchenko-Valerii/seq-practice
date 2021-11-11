const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const taskRouter = require('./taskRouter');
const postRouter = require('./postRouter');

router.use('/users', userRouter);
router.use('/tasks', taskRouter);
router.use('/posts', postRouter);

module.exports = router;