let data=30;
let min=0;
let hour=0;
let sec=0;
function clock(){
console.log(`${hour}:${min}:${sec}`);
if(hour==24){
    hour=0;
    min=0;
    sec=0;
}
if(min==60){
    hour++;
    min=0;
    sec=0;
}
if(0<=sec && sec<60){
sec++;
}
if(sec==60){
    sec=0;
    min++;
}

}
setInterval(clock,1*1000);
/*MISTAKES I DID 

Condition if(0 <= sec < 60)

In JavaScript, 0 <= sec < 60 doesn’t work the way you think.

It is evaluated left to right:

0 <= sec → gives true or false

Then true < 60 → 1 < 60 → always true

So this condition is always true.
✅ Fix: use if (sec >= 0 && sec < 60)

The for loop for (let i=0; i=1; i++)

i=1 is an assignment, not a condition.

It makes i always 1, so the loop never ends (infinite loop).

You don’t need a for loop here. Just use setInterval.

console.log inside the loop

You’re logging only once (when setting the interval), not every tick.

The log should be inside clock().
*/
    


