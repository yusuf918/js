//...a
//arr
var arr=[];
function loop(num){
for(var i =2;i<=Math.sqrt(num);i++){
if(num%i==0)
return arr.push(`${num} false`)
}

return arr.push(`${num} true`)


}


function findPrime(...num){
if(num<=1)
arr.push(false)

for(var i=0;i<num.length;i++){
loop(num[i])}



}
findPrime(6,5,3,67);
console.log(arr)
