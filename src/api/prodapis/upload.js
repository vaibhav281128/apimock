import * as handlers from './handlers';

let routes = 
  { 
    method : 'GET',
    path: '/upload',
    handler: handlers.upload
  }
;
 
export default routes;
