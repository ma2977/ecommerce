const { getAll, create, getOne, remove, update, login, getLoggedUser } = require('../controllers/artist.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const userRouter = express.Router();

categoryRouter.route('/')
    .get(verifyJWT, getAll)
    .post(create);

userRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

    userRouter.route('/verify/:code')
    .get(verifyCode);

userRouter.route('/login')
    .post(login);

userRouter.route('/me')
    .get(verifyJWT, getLoggedUser);

userRouter.route('/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);




module.exports = userRouter;