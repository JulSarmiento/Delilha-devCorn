import Express from 'express';
import httpStatus from 'http-status';

const router = Express.Router();

const BASE_URL = '/api/v1';

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).json({ 
    health: 'up',
    success: true,
    message: `Server working fine in enviroment: ${process.env.ENVIRONMENT}` ||  "Not set"
  });
});

export default router;