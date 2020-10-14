// Run with --allow-net please

import { Application } from "https://deno.land/x/oak/mod.ts";
import todosRoutes from './routes/todos.ts'; // Don't omit the .ts !!


const app = new Application();

app.use(async (ctx, next) => {
  console.log(ctx.request);
  await next();
});

// Setting up the routes
app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 8000 });