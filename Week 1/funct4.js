//THIS IS A CODE FOR CALLBACK *VVIPConcept IN FUNCTION AS WE USE IT TO SEND FUNCTION AS A PARAMETER TO ANOTHER FUNCTION 
//AS WE DID IN LINE 4 OR IN SUM() FUNCTION

function sum(a,b,fnToCall){
    let result=a+b;
    fnToCall(result);
    return result;
    
}
function displayResult(data){
    console.log(`The result is ${data}`);
}
function passDisplayresult(data){
    console.log(`Sum's result is ${data}`);
    return data;
}
//const ans=displayResult(passDisplayresult(sum(1,3)));it was my solution and fnToCall is not a keyword
const res=sum(1,2,displayResult);

