import express from 'express';
import httpStatus from 'http-status';
import pkg from 'express-openid-connect';
import { getAllUsers, getUserById } from '../controllers/index.js';
const router = express.Router();

const {requiresAuth} = pkg;

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

router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});


router.get('/listUsers', getAllUsers);
router.get('/getUserById/:user_id', getUserById);


export default router;