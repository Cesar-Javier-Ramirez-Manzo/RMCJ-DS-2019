//O(n)
let a=18
let b=3
let mul=0
let min=0
for(var i=0;i<(a+b);i++){

mul1=a*i

for(var x=0;x<a;x++)
mul2=b*x
if(mul1==mul2){
    min=mul1
}
}



console.log('El Mcm es '+min)
