// oak is equivalent to node's express
import { Router }from 'https://deno.land/x/oak/mod.ts';
import getTodos from './controllers/todos/get.js'
import postTodos from './controllers/todos/add.js';

const router = new Router();

router
  .get('/', ({ response }) => {
    response.body = 'Todo List API using Deno Runtime.';
  })
  .get('/todos', getTodos)
  .post('/todos', postTodos)

export default router;