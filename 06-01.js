var x = [3, 4, 9, 22, 11, 1, 60, 900, 2, 5, 6];
var first = x[0];
var second = x[1];
var third = x[2];

for(var i=0; i < x.length; i++){
 
  if(x[i] > first){
    first = x[i];
    i = 0;
  }
  
  if(x[i] < first && x[i] > second){
    second = x[i];
    i = 0;
  }
  
  if((x[i] < first && x[i] < second) && x[i] > third){
    third = x[i];
    i = 0;
  }
  
}

console.log('Max is ' + first);
console.log('Second greatest is ' + second);
console.log('Third greatest is ' + third);