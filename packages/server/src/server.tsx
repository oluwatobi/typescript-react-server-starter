import * as Koa from 'koa';
import * as serve from 'koa-static';
import router from '@middleware/router';

const app = new Koa();

const APP_PORT = 3000;
const OPTIONS = {
  index: 'index.html'
};

app.use(serve('./public', OPTIONS));
app.use(router.routes());

app.listen(APP_PORT);
