var prime=[];


loop()
console.log(prime)

function loop(){
for(var i=0;i<1000;i++){
check(i)


}

}

function check(x){
if(x<2)return false

for(var i=2;i<=Math.sqrt(x);i++){
if(x % i == 0)
return false


}

prime.push(x)
}
