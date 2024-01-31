//Código principal
//inicializamos los atributos básicos del juego
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximoJuegos = 10;
let listaNumerosSorteados = [];


function asignarTextoElemento(selector, text){
    let parrafo = document.querySelector(selector);
    parrafo.innerHTML = text; 
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('intentar').setAttribute('disabled', true);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if( numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es mayor");            
        }
        else{   
            asignarTextoElemento('p',"El numero secreto es menor");               
        }
        intentos ++;
    }    
    limpiarCaja();
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();    
    document.getElementById('reiniciar').setAttribute('disabled', true);    
}

function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random() *numeroMaximoJuegos)+1;
    if(listaNumerosSorteados.length == numeroMaximoJuegos){
        asignarTextoElemento('p',"Has llegado al numero máximo de juegos, refresca la página para jugar nuevamente");
        document.getElementById('intentar').setAttribute('disabled', true);
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = "";
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximoJuegos}`);
    document.getElementById('intentar').removeAttribute('disabled');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();

/* Desafíos iniciales:

* Crear una función que muestre "¡Hola, mundo!" en la consola.

function mensajeInicial(){
    console.log("¡Hola, mundo!");
}
mensajeInicial();

* Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function mensajeInicial(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
mensajeInicial("Sergio");

* Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function doblarNumero(numero){
    return numero*2;
}
console.log(doblarNumero(8));

* Crear una función que reciba tres números como parámetros y devuelva su promedio.

function calcularPromedio(numero1, numero2, numero3){
    return (numero1+numero2+numero3)/3;
}
console.log(calcularPromedio(1, 2, 3));

* Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function calcularNumeroMayor(numero1, numero2){
    return numero1==numero2 ? "Son iguales" : numero1 > numero2 ? numero1 : numero2;
}
console.log(calcularNumeroMayor(2, 3));

* Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function calcularPotenciaBaseDos(numero){
    return numero*numero;
}
console.log(calcularPotenciaBaseDos(8));
*/

/* Desafíos finales 1:

* Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularIMC(peso, estatura){
    let IMC = peso/Math.pow(estatura,2)
    if (IMC < 18.5){
        console.log(`Resultado : ${IMC} | Interpretación : Bajo Peso | Altura : ${estatura} metros | Peso : ${peso} kilogramos`);
    }else if(IMC >=18.5 && IMC <24.9){
        console.log(`Resultado : ${IMC} | Interpretación : Normal | Altura : ${estatura} metros | Peso : ${peso} kilogramos`);
    }else if(IMC >=24.9 && IMC <29.9){
        console.log(`Resultado : ${IMC} | Interpretación : Sobrepeso | Altura : ${estatura} metros | Peso : ${peso} kilogramos`);
    }else if(IMC >=29.9){
        console.log(`Resultado : ${IMC} | Interpretación : Obesidad | Altura : ${estatura} metros | Peso : ${peso} kilogramos`);
    }
}

calcularIMC(95, 1.80);

* Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero){
    let factorial = 1;
    if(numero === 0){
        return 1;
    }
    else{
        while(numero>0){
            factorial = factorial * numero;
            numero--;
        }
        return factorial;
    }    
}

console.log(calcularFactorial(1));

* Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function convertirDolaresAPesosColombianos(valor){
    const equivalencia = 3928.48;
    let conversion = valor*equivalencia;
    const formatToParts= new Intl.NumberFormat('en-US', {
        currency: 'COP',
        style: 'currency',
        minimumFractionDigits: 0
    });
    return formatToParts.format(conversion);
}

console.log(convertirDolaresAPesosColombianos(3200));

* Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaRectangulo (alto, ancho){
    return alto*ancho;
}
function calcularPerimetroRectangulo (alto, ancho){
    return (alto*2)+(ancho*2);
}

console.log("Area del rectangulo :",calcularAreaRectangulo(2,4));
console.log("Perimetro del rectangulo :",calcularPerimetroRectangulo(2,4));

* Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calcularAreaCirculo (radio){
    return Math.PI*(Math.pow(radio,2));
}
function calcularPerimetroCirculo (radio){
    return (radio*2)*Math.PI;
}

console.log("Area del circulo :",calcularAreaCirculo(10), "cm2");
console.log("Perimetro del circulo :",calcularPerimetroCirculo(10)," cm");

* Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaDeMultiplicar(numero){
    const cantidadResultados = 20;
    console.log("Tabla de multiplicar del ",numero);
    for(i = 1 ; i<=cantidadResultados; i++){
        console.log(`${numero} * ${i} = ${numero*i}`);
    }
}
console.log(tablaDeMultiplicar(8));
*/

/* Desafíos finales 2:

* Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];
console.log(listaGenerica);

* Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
console.log(lenguagesDeProgramacion);

* Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');
console.log(lenguagesDeProgramacion);

* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');

function mostrarLenguajesDeProgramacion(arreglo){    
    for(i = 0; i<arreglo.length; i++){
        console.log(arreglo[i]);
    }
}

mostrarLenguajesDeProgramacion(lenguagesDeProgramacion);

* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');

function mostrarLenguajesDeProgramacion(arreglo){    
    for(i = arreglo.length-1; i>=0; i--){
        console.log(arreglo[i]);
    }
}

mostrarLenguajesDeProgramacion(lenguagesDeProgramacion);

* Crea una función que calcule el promedio de los elementos en una lista de números.

let listaNumeros = [1,2,3,4,5,6,7,8,9,10];

function calcularPromedio(lista){
    let temp=0;
    listaNumeros.forEach(function (lista) {        
        temp = temp + lista;        
    });
    return temp/listaNumeros.length;
}

console.log(calcularPromedio(listaNumeros));

* Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

let listaNumeros = [1,2,3,35,4,54,101,25,32,45,87,5,6,7,8,9,10];

function calcularPromedio(lista){
    let listaTemporal = listaNumeros.sort(function (a, b) {
        return a - b;
      });
    let mayor = listaTemporal[listaTemporal.length-1];
    let menor = listaTemporal[0];
    console.log(`El numero mayor es: ${mayor} y el numero menor es ${menor}`);
}

calcularPromedio(listaNumeros);

* Crea una función que devuelva la suma de todos los elementos en una lista.

let listaNumeros = [1,2,3,4,5,6,7,8,9,10];

function sumaElementos(lista){
    let temp=0;
    listaNumeros.forEach(function (lista) {        
        temp = temp + lista;        
    });
    return temp;
}

console.log(sumaElementos(listaNumeros));

* Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

let listaNumeros = [1,2,3,4,5,42,25,6,7,8,9,10];

function posicionLista(lista,numero){
    let temp=0;
    for(i = 0; i<lista.length; i++){
        if(lista[i] === numero){
            temp = i;
        }  
    }    
    return temp;
}

console.log("La posición del numero en la lista es: ",posicionLista(listaNumeros,42));

* Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

let listaNumeros1 = [1,2,3,4,5,42,25,6,7,8,9,10];
let listaNumeros2 = [1,2,3,4,5,42,25,6,7,8,9,10];

function sumarListas(lista1,lista2){
    let temp=[];
    for(i = 0; i<lista1.length; i++){
        temp.push(lista1[i]+lista2[i]);
    }    
    return temp;
}

console.log(sumarListas(listaNumeros1,listaNumeros2));

* Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

let listaNumeros1 = [1,2,3,4,5,42,25,6,7,8,9,10];

function calcularCuadradoLista(lista1){
    let temp=[];
    for(i = 0; i<lista1.length; i++){
        temp.push(Math.pow(lista1[i],2));
    }    
    return temp;
}

console.log(calcularCuadradoLista(listaNumeros1));

*/