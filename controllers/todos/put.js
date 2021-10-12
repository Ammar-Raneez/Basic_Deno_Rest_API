import { FILE_PATH } from '../../config.js';

export default async ({ response, request, params }) => {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  try {
    const { title } = await request.body().value;

    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));

    const updatedTodos = todos.map((todo) => {
      if (todo.id === Number(params.id)) {
        return { ...todo, title, };
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