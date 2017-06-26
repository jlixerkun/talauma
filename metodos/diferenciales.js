console.clear();
console.log("Diferenciales");

var fmt = new Intl.NumberFormat('en',{
    style: 'decimal',
    maximumFractionDigits: 2
});

var precise = new Intl.NumberFormat('en', {
    style : 'decimal',
    maximumFractionDigits:  6,
    minimumFractionDigits:  6
});
// Euler

function euler(n=5){
    ans = [];
    for(i=0; i<n;i++){
        
    }
    return ans;
}

function example(x,y){
    return 2*x + y/3;
} 

function newEuler(x0,y0,h,func){
    return y0+h*(func(x0,y0));
}


function factorial(n){
    if(n===1){
        return 1
    } else {
        return n * factorial(n-1)
    }
}

function solve(x0, y0, n, h, func){
    var xnew, ynew;
    var points = {};
    for(i=0; i < n; i++){
        points[`point_${i}`] = {};
        var point = points[`point_${i}`];
        xnew = +fmt.format(x0 + i*h);
        ynew = +precise.format(newEuler(xnew, y0, h, func));
        y0 = ynew;
        point.x = xnew;
        point.y = ynew;
    }

    console.log(`-----------------------------------------\nEULER\n-----------------------------------------`);
    console.table(points);
    return points;
}


function solveTaylor(x0, y0, n, h){
    var xnew, ynew, yreal;
    var points = {};
    for(i=0; i < n; i++){
        points[`point_${i}`] = {};
        var point = points[`point_${i}`];
        xnew = +fmt.format(x0 + i*h);
        point.x = xnew;
        point.y = y0;
        yreal = realTaylor(xnew);
        point.real = yreal;
        point.diferencia = y0-yreal;
        ynew = newTaylor(xnew, y0, h);
        y0 = ynew;
    }

    console.log(`-----------------------------------------\nTAYLOR\n-----------------------------------------`);
    console.table(points);
    return points;
}





function newTaylor(x,y,h){  
    return y + ((2*x -y +5)*h) + ((-2*x + y - 3)*(Math.pow(h,2)/factorial(2))) + ((2*x -y +3 )*(Math.pow(h,3)/factorial(3))) + ((-2*x + y - 3)*(Math.pow(h,4)/factorial(4))) + ((2*x -y +3 )*(Math.pow(h,5)/factorial(5)));
}

function realTaylor(x){
    return ((2*Math.exp(x)*x)+(3*Math.exp(x))-2)/Math.exp(x);
}