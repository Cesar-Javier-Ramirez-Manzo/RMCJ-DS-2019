var x=0
var sum=0


for(var i=0;i<10;i++){
sum=sum+(1/Fact(i))
console.log(sum)
}
function Fact(z){
    var acum=1

    for(var c=1;c<=z;c++){

        acum=+(acum*c)
    }
   
    return acum
}
console.log(sum)
console.log(Math.E)