export let hello = (request, h) => { 
    var hello = 'Hello';
    var name = 'World'; 

    if(request.query.name != undefined)
      name = request.query.name

  return hello + ', ' + name;
};

