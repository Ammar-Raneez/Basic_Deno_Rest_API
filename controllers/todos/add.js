import { FILE_PATH } from '../../config.js';

export default async ({ response, request }) => {
  const decoder = new TextDecoder();

  // we must encode the data before posting it
  const encoder = new TextEncoder();

  try {
    const { title } = await request.body().value;
    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));

    const newTodo = { id: todos.length + 1, title, completed: false, };
    todos.push(newTodo);

    // write to a file using deno
    await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(todos)));

    response.status = 200;
    response.body = { status: 'success', body: newTodo };
  } catch (err) {
    response.status = 502;
    response.body = { status: 'failed', error };
  }
};