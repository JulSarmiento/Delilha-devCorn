import express from 'express';
import pkg from 'express-openid-connect';
import { getAllUsers } from '../controllers/index.js';
const router = express.Router();

const {requiresAuth} = pkg;

router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

router.get('/', getAllUsers);

export default router;