import Express from 'express';
import httpStatus from 'http-status';
import { auth } from 'express-openid-connect';

import auth0Config from '../utils/auth0.config.js';
import usersRouter from './users.routes.js';

const router = Express.Router();

const BASE_URL = '/api/v1';

router.get(`/health`, (_req, res) => {
  res.status(httpStatus.OK).json({ 
    health: 'up',
    success: true,
    message: `Server working fine in enviroment: ${process.env.ENVIRONMENT}` ||  "Not set"
  });
})

router.use(auth(auth0Config))
  .use(usersRouter)


export default router;