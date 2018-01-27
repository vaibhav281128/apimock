import * as handlers from './handlers';

let routes = 
  { 
    method : 'POST',
    path: '/csv2json',

    config: {
        handler: handlers.csv2json,
        payload: {
          output: 'stream',
          allow: 'multipart/form-data'
        }
      }
  };
 
export default routes;
