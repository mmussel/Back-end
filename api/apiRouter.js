const express = require('express');
const router = express.Router();
const userRouter = require('../users/userRouter');
const authRouter = require('../auth/authRouter');
const classRouter = require('../classes/classRouter');


router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/classes', classRouter);


module.exports = router;