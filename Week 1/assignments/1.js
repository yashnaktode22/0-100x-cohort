let data=30;
function print(){
    console.log(data);
    data--;
}
for(let i=data;i>=0;i--){
    setTimeout(print,(data-i)*1000);//know why data-i is used here and not 1 second
    //the timeout function is a timer of sorts meaning after this time the function willrun so if 1 second is
   // there then as 1 th second is completed it is completed for all the iterations so the function runs intantly
   //but if we use this then it means at 30th sec a print should run,after that so on and so forth
}
