import { FILE_PATH } from '../../config.js';

export default async ({ response }) => {
  // the object can be destructured to get only the response
  // else it is a huge ass document

  const decoder = new TextDecoder();

  try {
    // Deno returns the db in the form of some byte array
    // so we will have to decode the data
    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));
    
    response.status = 200;
    response.body = { status: 'success', todos, };
  } catch (err) {
    response.status = 500;
    response.body = { status: 'failed', todos: [], };
  }
};