/* 
1-Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
si la edad ingresada no es un número válido indicarlo en un mensaje

let edad = parseInt(prompt("Ingresar edad"))

if (edad >=18) {
    console.log("Ya puede conducir")
}
else{
    console.log("No es un numero valido");
}
*/


/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. 
Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

let nota = parseInt(prompt("Ingrese un numero de 0 a 10"));

if (nota >= 0 || nota <= 10) {
    switch (nota) {
        case 0:
        case 1:
        case 2:
            document.write("Muy deficiente");
            break;
        case 3:
        case 4:
            document.write("Insuficiente");
            break;
        case 5:
        case 6:
            document.write("Suficiente");
            break;
        case 7:
            document.write("Bien");
            break;
        case 8:
        case 9:
            document.write("Notable");
            break;
        case 10:
            document.write("Sobresaliente");
            break;

        default:
            alert("Numero erroneo");
            break;
    }
    }
    else {
        !isNaN (nota)
        alert("Introduce un numero valido")

    }
 /*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadenas = "";

while (true) {
    let entrada = prompt("Ingresa una cadena de texto");
    if (entrada === null) {
        alert(`Cadenas ingresadas: ${cadenas}`);
        break;
    } else {
        cadenas += entrada + "-";
    }
}
/*

/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let sumaTotal = 0;
let continuar = true;

while (continuar) {
    let numero = prompt("Introduce un número:");

    if (numero === null) {
        continuar = false;
    } else if (!isNaN(numero)) {
        sumaTotal += parseFloat(numero);
    } else {
        alert("Debes introducir un número");
    }
}

alert("La suma total de los números es: " + sumaTotal);

/*

5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

/*

while (true) {
    let dni = prompt("Introduce un numero de DNI: ");

    if (dni === null) {
        break;
    }

    if (isNaN(dni)) {
        alert("No es un numero valido")
    }
    
    let numero = parseInt(dni);
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let i = numero % 23;
    let letra = letras.charAt(i);

    alert("La letra de DNI " + numero + " es: " + letra);
}

/*
 



/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
/*
    for (let i = 1; i < 31; i++) {
        let aux = i + "";
        console.log(aux.repeat(i));
    }



/*

/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

let num = parseInt(prompt("Ingrese un numero"))

    if (num <= 50) {
        for (let i = num; i > 0 ; i--){
            console.log(i.toString().repeat(i));		
        } 
    }else {
        console.log("error");
    }
*/

/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456


let numero = parseInt(prompt(`Ingrese un numero que se encuentre entre el 1 al 50`));
let cadena
let caracter

if (isNaN(numero)) {
    alert(`el valor ingresado no es un numero.`)
} else if (numero >= 0 && numero < 51) {
    for (let i = 1; i < numero + 1; i++) {
        cadena = "";
        caracter = String(i);
        for (let j = 0; j < i; j++) {
            cadena = cadena + caracter;
        }
        console.log(cadena);
    }

} else {
    alert(`El numero ingresado no se encuentra entre 1 y 50`)
}



/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10


for (let i = 1; i <= 500; i++) {

    if (i % 4 == 0 && i % 9 == 0) {
        console.log(`${i} (multiplo de 4 y 9)`);
    } else if (i % 4 == 0) {
        console.log(`${i} (multiplo de 4)`);
    } else if (i % 9 == 0) {
        console.log(`${i} (multiplo de 9)`);
    } else {
        console.log(i);
    }

    if (i % 5 == 0) {
        console.log(`————————————————————`);
    }

}

/*
10 - Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.


let filas = parseInt(prompt("Introduce el número de filas:"));
let columnas = parseInt(prompt("Introduce el número de columnas:"));
let numero = filas * columnas;

document.write("<table>");

for (let i = 0; i < filas; i++) {
    document.write("<tr>");

    for (let j = 0; j < columnas; j++) {
        document.write("<td>" + numero + "</td>");
        numero--;
    }

    document.write("</tr>");
}

document.write("</table>");
*/


/*
11 - Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let nombres = [];
let edades = [];



for (let i = 0; i < 3; i++) {
    nombres.push(prompt(`ingrese un nombre:`));
    console.log(nombres);
    edades.push(prompt(`ingrese la edad de ${nombres[i]}`));
    console.log(edades);
}
if (edades[1] > edades[2]) {
    if (edades[1] > edades[3]) {
        document.write(`${nombres[1]} es el mayor de los tres `);
    } else {
        document.write(`${nombres[3]} es el mayor de los tres `);
    }
} else {
    if (edades[2] > edades[3]) {
        document.write(`${nombres[2]} es el mayor de los tres `);
    } else {
        document.write(`${nombres[3]} es el mayor de los tres `);
    }
}



/*
12 - Realiza un script que genere un número aleatorio entre 1 y 99


let numRandom = Math.floor(Math.random() * 100);

console.log(numRandom);

/*


/*
13 - Realiza un script que pida un texto y lo muestre en mayúsculas.

let cadena = prompt(`ingresar una cadena de texto:`);
console.log(cadena.toUpperCase());
* /


/*
14 - Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace.
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h - o - l - a - -q - u - e - -t - a - l”.

let cadenaTexto = prompt(`ingresar una cadena de texto:`);
    let salidaTexto="";

    for (let i = 0; i < cadenaTexto.length; i++) {
        if (i == 0) {
            salidaTexto = cadenaTexto[i];
        } else {
            salidaTexto = salidaTexto + "-" + cadenaTexto[i];
        }
    }
    console.log(salidaTexto);
*/

/*
15 - Realiza un script que cuente el número de vocales que tiene un texto.

let cadena = prompt(`ingresar una cadena de texto:`).toLowerCase();
let salida = 0;

for (let i = 0; i < cadena.length; i++) {

    if (cadena[i] == "a" || cadena[i] == "e" || cadena[i] == "i" || cadena[i] == "o" || cadena[i] == "u") {
        salida = salida + 1;
    }
}
console.log(`El texto tiene ${salida} vocales.`);

*/

/*

16 -Realiza un script que pida una cadena de texto y la devuelva al revés.Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*
 let cadena = prompt(`ingresar una cadena de texto:`);
 let salida = "";

 for (let i = cadena.length - 1 ; i >= 0; i-- ) {
     salida = salida + cadena[i];
    
 }
 console.log(salida);
*/

/*

17 - Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

   Ejemplo:

Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1


let cadena = prompt(`ingresar una cadena de texto:`).toLowerCase();
let pos = 0;
let vocal = "";
let corte;

for (let i = 0; i < cadena.length; i++) {
    switch (cadena[i]) {
        case "a":
            pos = i;
            vocal = "a";
            corte = true;
            break;
        case "e":
            pos = i;
            vocal = "e";
            corte = true;
            break;
        case "i":
            pos = i;
            vocal = "i";
            corte = true;
            break;
        case "o":
            pos = i;
            vocal = "o";
            corte = true;
            break;
        case "u":
            pos = i;
            vocal = "u";
            corte = true;
            break;
        default:
            break;
    }
    if (corte == true) {
        break;
    }
}
console.log(`la vocal '${vocal}' está en la posición ${pos}.`);
*/