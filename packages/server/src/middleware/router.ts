import * as Router from 'koa-router';
import { healthcheck } from '@routes/healthcheck';

const router = new Router();

router.get('/healthcheck', healthcheck);

export default router;
