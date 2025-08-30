let numbers=[20,21,22,23,24,25,26];
let big=numbers[0];
for(let i=0;i<numbers.length/2;i++){
big=numbers[i];
numbers[i]=numbers[numbers.length-i-1];
numbers[numbers.length-i-1]=big;
};
for(let i=0;i<numbers.length;i++){
console.log(numbers[i]);
};