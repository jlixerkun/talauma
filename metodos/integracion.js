function func(x){
    // return Math.sqrt(2+(Math.pow(x,2)));
    return Math.cos(Math.pow(x,2));
}

// var [a,b,n] =[0,4,8];




function integrar(a,b,n,f) {
    delta = (b-a)/n;    
    factor = 0;
    for (i=0;i<=n;i++){
        if(i==0||i==n){
            factor += f(a+(i*delta));
        } else {
            factor += 2 * f(a+(i*delta));
        }
        console.log(f(a+(i*delta)));
    }
    return (delta*factor)/2;
}
console.log(integrar(0,2,4,func));


function simpson13(a,b,func){
    delta = (b-a)/2;
    return (delta/3)*(func(a)+4*func((a+b)/2)+func(b));
}

function energia(x) {
    return (Math.pow(x,5)/28)-((22*Math.pow(x,4))/7)+(115*Math.pow(x,3))-(2200*Math.pow(x,2))+(22000*x)-88000
}
function punto21(x) {
    return(Math.sqrt(3+Math.pow(x,2)));
}
console.log("punto211");
console.log(simpson13(0,1,punto21));
function punto22(x){
    return(1/(2+x));
}
function simp3(a,b,c,delta) {
    return((delta/3)*(a+4*b+c))
}