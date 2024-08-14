import express from 'express';
import httpStatus from 'http-status';
import pkg from 'express-openid-connect';
import { getAllUsers, getUserById, getUserByEmail, createuser } from '../controllers/index.js';
const router = express.Router();

const {requiresAuth} = pkg;

// auth0 validate user authenticated
router.get('/', (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.status(httpStatus.OK).json({
      succes: true,
      data: req.oidc.user,
    });
  } else {
    res.status(httpStatus.UNAUTHORIZED).json({
      succes: false,
      data: 'Unauthorized',
    });
  }
});

// auth0 profile loged user
router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// Crud for users with management api
router.get('/listUsers', getAllUsers);
router.get('/getUserById/:user_id', getUserById);
router.get('/getUserByEmail/:email', getUserByEmail);
router.post('/createUser', createuser);


export default router;