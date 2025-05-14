import next from 'next';

const app = next({ dev: false });
const handle = app.getRequestHandler();

export default async (request, context) => {
  await app.prepare();
  return handle(request, context.res);
}; 