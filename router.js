// oak is equivalent to node's express
import { Router }from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/', ({ response }) => {
  response.body = 'Todo List API using Deno Runtime.';
});

export default router;