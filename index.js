// helps us with routing
import { Application } from 'https://deno.land/x/oak/mod.ts';
import { PORT } from './config.js';
import router from './router.js';

const app = new Application();
app.use(router.routes());

// Allow all methods - Deno is much secure than node, so we should explicitly give permissions
app.use(router.allowedMethods());

console.log(`Server is running on http://localhost:${PORT }`);

await app.listen({ port: PORT });