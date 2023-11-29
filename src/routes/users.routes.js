import express from 'express';
import pkg from 'express-openid-connect';
import { getAllUsers } from '../controllers/index.js';
const router = express.Router();

const {requiresAuth} = pkg;

router.get('/', (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.send('Logged in');
  } else {
    res.send('Logged out');
  }

});

router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// router.get('/listUsers', requiresAuth(), getAllUsers);
router.get('/listUsers', getAllUsers);


export default router;