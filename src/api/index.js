import testRoutes from './testapis'; 
import prodRoutes from './prodapis'; 
import uploadRoute from './prodapis/upload'; 
import csv2jsonRoute from './prodapis/csv2json'; 

let routes = [];
routes.push(testRoutes);
routes.push(prodRoutes);
routes.push(uploadRoute);
routes.push(csv2jsonRoute);

export default routes;