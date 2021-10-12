import { FILE_PATH } from '../../config.js';

export default async ({ response, params }) => {
  // get params directly
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  try {
    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));


    const updatedTodos = todos.map((todo) => {
      if (todo.id === Number(params.id)) {
        return { ...todo, completed: true, };
      }

      return todo;
    });
    await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(updatedTodos)));

    response.status = 200;
    response.body = { status: 'success', data: updatedTodos };
  } catch (err) {
    response.status = 502;
    response.body = { status: 'failed', error };
  }
};