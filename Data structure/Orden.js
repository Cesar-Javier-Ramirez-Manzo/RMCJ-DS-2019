let x=[10,2,7,4,8]



console.log(x)
for(var m=0;m<5;m++){
   for(var o=0;o<4;o++){
    if(x[o]>x[o+1]){

       i=x[o]
       x[o]=x[o+1]
       x[o+1]=i
    }

   }
 
    console.log(x)
}
