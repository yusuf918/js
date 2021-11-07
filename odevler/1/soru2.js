var numarr1=[];
var numarr2=[];

function num(num1,num2){
loop(num1,numarr1)
loop(num2,numarr2)

if(numarr1.reduce(sum)===num2&&numarr2.reduce(sum)===num1)
{console.log('true')

}
else console.log('false')
} 


function loop(num,arrname){
for(let i=0;i<num;i++){
if(num%i==0)
arrname.push(i)
}
}

const sum=(a,b) =>a+b;
num(2,4);
