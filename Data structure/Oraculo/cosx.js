var x=15
var sum=0
var int=-1

for(var i=0;i<=x;i++){

    int=int*-1
sum=sum+((Math.pow(x,i))/Fact(i))*(int)


i++
}

console.log(sum)



function Fact(z){
    var acum=1

    for(var c=1;c<=z;c++){

        acum=+(acum*c)
    }
   
    return acum
}

console.log(Math.cos(x))