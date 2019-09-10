//O(n)
let a=180
let b=360

let may1=0
let may2=0
var div=0
var resul=0



    for(var c=(a+b);c>0;c--){

        div=a/c
      
        if(div>may1&&(a%c)==0){
            may1=div
            if(may1==may2){
                resul=(may1+may2)/2
            }
      
        }
        div=b/c
        if(div>may2&&(b%c)==0){
            may2=div  
            if(may1==may2){
                resul=(may1+may2)/2
            }
          
        }
       

        }
      


console.log('El MCD es '+resul)
