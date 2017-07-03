// Variables iniciales
var funcion, x,y,h, n, xa,xb, intervalo, factor, escY;
var tablaSln = document.querySelector('.solucion');
// formatos de números xi
let fmt = new Intl.NumberFormat('en-US',{
    style:'decimal',
    maximumFractionDigits:2
});
// formato para resultados yi
let fmtY = new Intl.NumberFormat('en-US',{
    style: 'decimal',
    maximumFractionDigits: 6,
    minimumFractionDigits: 6
});

function clearAll(){
    document.equation.x0.value = '';
    document.equation.y0.value = '';
    n = Math.ceil((xb - xa)/h);    
    document.equation.xa.value = '';
    document.equation.xb.value = '';
    document.equation.h.value = '';
    document.equation.equat.value = '';  
    document.equation.deriv1.value = '';  
    document.equation.deriv2.value = '';  
    document.equation.deriv3.value = '';
    clearTable();
    clearCanvas();
}

function evaluaFuncion() {
    x =     + document.equation.x0.value;
    y =     + document.equation.y0.value;
    xa =    + document.equation.xa.value;
    xb =    + document.equation.xb.value;
    h =     + document.equation.h.value;
    n = Math.ceil((xb - xa)/h);    
    intervalo = xb - xa;
    for (i=0; i <= n; i++){
        if (i===0){
            writeTable(x,y,0);
            plotPoint(x,y);
        } else {
            y = + fmtY.format(newY(x,y,h));
            x = + fmt.format(i*h);
            // y= newY(x,y,h);
            // x= i*h;
            writeTable(x,y,i);
            plotPoint(x,y);
        }
    }
}

function clearTable(){
    for(i=0; i<=n; i++){
        tablaSln.deleteRow(1);
    }
}

function writeTable(x,y,i){
    var fila = document.createElement('tr');
    fila.innerHTML = `<td>${i}</td><td>${x}</td><td>${y}</td>`;
    tablaSln.appendChild(fila);
}

// Evalua funciones ingresadas por el usuario
function func1(x,y) {
    funcion = document.equation.equat.value;    
    return (eval(funcion));
}
function derivada1(x,y) {
    var d1 = document.equation.deriv1.value;    
    return (eval(d1));
}
function derivada2(x,y) {
    var d2 = document.equation.deriv2.value;    
    return (eval(d2));
}
function derivada3(x,y) {
    var d3 = document.equation.deriv3.value;    
    return (eval(d3));
}
// Determinar un punto siguiente a partir de x, y y h
function newY(x,y,h){
    return y + h * func1(x,y) + ((Math.pow(h,2) * derivada1(x,y))/2)+((Math.pow(h,3) * derivada2(x,y))/6) +((Math.pow(h,4) * derivada3(x,y))/24);
}

// grafica

let canvas = document.querySelector('#grafica');
let context = canvas.getContext('2d');

// medidas del canvas
var ancho = canvas.width;
var alto = canvas.height;
var cerox = 0.1*canvas.width;
var ceroy = 0.95*alto;
dibujaEjes();




function dibujaEjes(){
    context.fillStyle='#900';
    // trazar eje x
    context.fillRect(0, ceroy,ancho,1);
    // trazar eje y
    context.fillRect(cerox,0,1,alto);
}
function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    dibujaEjes();
}
function plotPoint(x,y){
    context.fillStyle='#000';
    context.strokeStyle='#396';
    context.fillRect(cerox + (50*x) ,ceroy-(3*y),2,2);
}