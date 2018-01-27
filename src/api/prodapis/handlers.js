
let adder = (sum, element) => {
	let p = new Promise ((resolve) => {
    resolve(sum + element);
  });

  return p;
}

var global_sum = 0;
var n = 0;
var number = 0;
export let loop = (request, h) => {
  let numbers = [1,2,3,4,5,6,7,8,9,10];

  number = numbers[n];

  return adder(global_sum,number)
  .then(res => {
    console.log(`Current element is ${number}`);
    console.log(`Current sum is ${res}`);
    global_sum=res;
    if(n < numbers.length-1)
    {
      ++n;
      return loop();
    }
    else
    {
      let val = global_sum;
      n=0;
      global_sum = 0;
      return val;
    }
  });
}


export let upload = (request, h) => {
  return h.file('./src/api/prodapis/upload.html');
}

export let csv2json = (request, h) => {

  return 'todo';

  };
  
  