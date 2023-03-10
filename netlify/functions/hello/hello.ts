import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, _context) => {
  let name: string = 'stranger';

  if (typeof event.queryStringParameters === 'string') {
    name = event.queryStringParameters;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: `${name || 'world'} from functions`,
      location: 'from functions',
    }),
  }
}
