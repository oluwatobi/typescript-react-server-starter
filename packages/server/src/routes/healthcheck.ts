

export const healthcheck = async (ctx: any, next) => {
  ctx.body = {status: 'ok'};
  next();
}
