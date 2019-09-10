var x=2
var sum=0
let z=0
for(var i =0;i<10;i++){

    z=(Math.pow(x,i)/factorial(i))
    sum=+z

}

console.log('este es el resultado '+sum)


function factorial(w){

    var v=1
    for(var c=0;c<=w;c++){
        v=+(v*w)
        console.log(v)
    }
    
    return v
}

console.log(Math.pow(Math.E,1))