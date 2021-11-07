//mukemmel sayi9
var arr=[];
var perfectNums=[]
loop();


function loop(){
for(var i=0;i<1000;i++){
check(i)

}
console.log(i)
console.log(perfectNums)



}


//mukemmel sayi mi kontrol
function check(num){
for(var i=1;i<num;i++){
if(num==1)return i++

if(num%i===0)arr.push(i)

}

//hata olmamasi icin 1 ve 0 icin
if(num>1){
if(arr.reduce(sum)==num)
perfectNums.push(num)
}
arr=[]
//arraydeki bolenleri silme
}

function sum(a,b){
return a+b;


}
