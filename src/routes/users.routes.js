import express from 'express';
import pkg from 'express-openid-connect';

const router = express.Router();

const {requiresAuth} = pkg;

router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

export default router;