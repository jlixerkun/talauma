var percentFormat = new Intl.NumberFormat('es-ES', {
    style: 'percent',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
});
var numberFormat = new Intl.NumberFormat('es-ES', {
    style: 'decimal',
    maximumFractionDigits: 4,
    minimumFractionDigits: 4
});

var iter = 0;
var lambda = 1.25;
document.querySelector('.lambda').innerHTML=lambda;
const porcentajeLimite = 0.05;

var [x1,x2,x3] = [0,0,0];
var [x1n,x2n,x3n] = [0,0,0];
var [Eax1, Eax2, Eax3] = [0,0,0];  // Error absoluto en cada coordenda

var B1,B2, B3; // Vector solución
var A11, A12, A13, A21, A22, A23, A31, A32, A33; // Matriz de coeficientes


var btnIterar = document.querySelector('#iterar');
var tabla = document.querySelector('table.iteraciones');

btnIterar.addEventListener('click', sor);



function readVals(){
    // B1  =   +prompt("Escriba el valor de b1");
    // B2  =   +prompt("Escriba el valor de b2");
    // B3  =   +prompt("Escriba el valor de b3");
    // A11 =   +prompt("Escriba el valor de a11");
    // A12 =   +prompt("Escriba el valor de a12");
    // A13 =   +prompt("Escriba el valor de a13");
    // A21 =   +prompt("Escriba el valor de a21");
    // A22 =   +prompt("Escriba el valor de a22");
    // A23 =   +prompt("Escriba el valor de a23");
    // A31 =   +prompt("Escriba el valor de a31");
    // A32 =   +prompt("Escriba el valor de a32");
    // A33 =   +prompt("Escriba el valor de a33");
    B1  = 500;
    B2  = 200;
    B3  = 80;
    A11 = 20;
    A12 = -2;
    A13 = -5;
    A21 = -5;
    A22 = 30;
    A23 = -3;
    A31 = -5;
    A32 = -5;
    A33 = 30;
    ecuacion.querySelector('#B1').innerHTML = `${B1}`;
    ecuacion.querySelector('#B2').innerHTML = `${B2}`;
    ecuacion.querySelector('#B3').innerHTML = `${B3}`;
    ecuacion.querySelector('#a11').innerHTML = `${A11}`;
    ecuacion.querySelector('#a12').innerHTML = `${A12}`;
    ecuacion.querySelector('#a13').innerHTML = `${A13}`;
    ecuacion.querySelector('#a21').innerHTML = `${A21}`;
    ecuacion.querySelector('#a22').innerHTML = `${A22}`;
    ecuacion.querySelector('#a23').innerHTML = `${A23}`;
    ecuacion.querySelector('#a31').innerHTML = `${A31}`;
    ecuacion.querySelector('#a32').innerHTML = `${A32}`;
    ecuacion.querySelector('#a33').innerHTML = `${A33}`;
}



function sor(){
fila = document.createElement('tr');
    if(B1 == undefined){
        readVals();
    }

    if(iter==0){
        fila.innerHTML = `
            <td>${iter}</td>
            <td>${numberFormat.format(x1)}</td>
            <td>${numberFormat.format(x2)}</td>
            <td>${numberFormat.format(x3)}</td>
            <td></td>
            <td></td>
            <td></td>
        `;
        tabla.appendChild(fila);
    } else if(iter==1) {
        x1n = (B1-(A12*x2)-(A13*x3))/A11; // Nuevo valor de x1, a ser usado para hallar x2 y x3
        Eax1 = Math.abs((x1n-x1)/x1n);
        x1  = x1n;      // Guardamos este valor en x1

        x2n = (B2-(A21*x1)-(A23*x3))/A22;   
        Eax2 = Math.abs((x2n-x2)/x2n);
        x2  = x2n;      // Guardamos nuevo valor en x2

        x3n = (B3 - (A31*x1) - (A32*x2))/A33;
        Eax3 = Math.abs((x3n-x3)/x3n);
        x3 = x3n;       // Guardamos el valor actualizado en x3
        fila.innerHTML = `
            <td>${iter}</td>
            <td>${numberFormat.format(x1)}</td>
            <td>${numberFormat.format(x2)}</td>
            <td>${numberFormat.format(x3)}</td>
            <td></td>
            <td></td>
            <td></td>
        `;
        tabla.appendChild(fila);
    } else {
        x1n = (B1-(A12*x2)-(A13*x3))/A11; // Nuevo valor de x1, a ser usado para hallar x2 y x3
        x1n = (lambda*x1n)+((1-lambda)*x1) //ponderacion
        Eax1 = Math.abs((x1n-x1)/x1n);
        x1  = x1n;      // Guardamos este valor en x1

        x2n = (B2-(A21*x1)-(A23*x3))/A22;   // no hay valor de x3 aun
        x2n = (lambda*x2n)+((1-lambda)*x2) //ponderacion
        Eax2 = Math.abs((x2n-x2)/x2n);
        x2  = x2n;      // Guardamos nuevo valor en x2

        x3n = (B3 - (A31*x1) - (A32*x2))/A33;
        x3n = (lambda*x3n)+((1-lambda)*x3) //ponderacion
        Eax3 = Math.abs((x3n-x3)/x3n);
        x3 = x3n;       // Guardamos el valor actualizado en x3
        fila.innerHTML = `
            <td>${iter}</td>
            <td>${numberFormat.format(x1)}</td>
            <td>${numberFormat.format(x2)}</td>
            <td>${numberFormat.format(x3)}</td>
            <td class="${Eax1 < 0.05}">${percentFormat.format(Eax1)}</td>
            <td class="${Eax2 < 0.05}">${percentFormat.format(Eax2)}</td>
            <td class="${Eax3 < 0.05}">${percentFormat.format(Eax3)}</td>
        `;
        tabla.appendChild(fila);
    }
    
   
    iter++
}