let numbers=[20,21,22,23,24,25,26];
let big=numbers[0];
for(let i=0;i<numbers.length;i++){
if(big<numbers[i]){
    big=numbers[i];
}
}
console.log(big);