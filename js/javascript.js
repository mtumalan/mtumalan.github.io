//Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
function iterar(cadena){
    let count ={};
    for (let i = 0; i < cadena.length; i++){
        if (count[cadena[i]]){
            count[cadena[i]]++;
        }else{
            count[cadena[i]]=1;
        }
    }

    for (let i = 0; i < cadena.length; i++){
        if (count[cadena[i]] === 1){
            console.log(cadena[i]);
        }
    }
}
console.log("Ejercicio 1: abacddbec");
iterar("abacddbec");

//Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
function bubblesort(numeros){
    numeros.sort(function(num1, num2){
        return num1-num2;
    })

    console.log(numeros);
}
console.log("Ejercicio 2: [5, 3, 6, 8, 1, 9]")
bubblesort([5, 3, 6, 8, 1, 9]);

//Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; 
function reverso(numeros){
    let ar=[];
    for (let i = numeros.length - 1; i >=0; i--){
        ar.push(numeros[i]);
    }
    console.log(ar);
}
console.log("Ejercicio 3.1: [1, 2, 3, 4]");
reverso([1, 2, 3, 4]);

//la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
function reverso2(numeros){

}

//Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
function mayus(cadena){
    cadena = cadena.split("");
    cadena[0] = cadena[0].toUpperCase();
    for (let i = 0; i < cadena.length; i++){
        if(cadena[i] == " "){
            cadena[i+1] = cadena[i+1].toUpperCase();
        }
    }
    cadena=cadena.join("");
    console.log(cadena);
}

console.log("Ejercicio 4: hola mundo cómo están");
mayus("hola mundo cómo están");

function mcd(num1, num2){
    while (num2 != 0){
        const numtemp = num2;
        num2 = num1 % num2;
        num1 = numtemp;
    }
    console.log(num1);
}

console.log("Ejercicio 5: 200 y 100");
mcd(200,100);

//Crea una función que cambie una cadena de texto a 'Hacker Speak'.
function hacker(cadena){
    let hs={
        a:"4",
        e:"3",
        i:"1",
        o:"0",
        s:"5"
    };
    cadena=cadena.split("");
    for(let i = 0; cadena.length > i; i++){
        if(hs[cadena[i].toLowerCase()]){
            cadena[i]=hs[cadena[i].toLowerCase()];
        }
    }
    cadena=cadena.join("");
    console.log(cadena);
}

console.log("Ejercicio 6: Javascript es divertido");
hacker("Javascript es divertido");

//Escribe una función que reciba un número, y regrese una lista con todos sus factores.
function factoriza(num){
    let lista=[];
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            lista.push(i)
        }
    }
    console.log(lista);
}
console.log("Ejercicio 7: 12")
factoriza(12);

//Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan.
function quitaDups(numeros){
    let lista=[];
    for(let i = 0; i < numeros.length; i++){
        if(lista.includes(numeros[i]) == false){
            lista.push(numeros[i]);
        }
    }
    console.log(lista);
}
console.log("Ejercicio 8: [1,0,1,1,0,0]")
quitaDups([1,0,1,1,0,0]);

//Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.
function cadtext(cadenas){
    let corta = cadenas[0].length;
    for(let i = 0; i < cadenas.length; i++){
        if(corta > cadenas[i].length){
            corta = cadenas[i].length;
        }
    }
    console.log(corta);
}

console.log("Ejercicio 9: [cadena uno, cadena 2, hola]")
console.log(cadtext(["cadena uno", "cadena 2", "hola"]));

//Escribe una función que revise si una cadena de texto es un palíndromo o no.

function palindromo(cadena){
    let cadpal =[];
    cadena = cadena.split("");
    for(let i = cadena.length - 1; i >= 0; i--){
        cadena[i] = cadena[i].toLowerCase();
        if(cadena[i] == " "){
            cadena.splice(i,1);
        }else{
            cadpal.push(cadena[i]);
        }
    }
    cadena=cadena.join("");
    cadpal=cadpal.join("");
    if(cadena == cadpal){
        console.log("Es un palindromo")
    }else{
        console.log("No es un palindromo")
    }
}
console.log("Ejercicio 10: Anita lava la tina")
palindromo("Anita lava la tina");

//Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.

//Escribe una función que tome una lista de números y devuelva la mediana y la moda.

function medmod(numeros){
    numeros=numeros.sort();
    let med = 0;
    let mod ={};
    let modmax = 0;
    if(numeros.length % 2 == 1){
        med = numeros[parseInt(numeros.length / 2)];
    }else{
        med = (numeros[parseInt(numeros.length / 2)] / numeros[parseInt(numeros.length / 2)] + 1);
    }
    for (let i = 0; i < numeros.length; i++){
        if (mod[numeros[i]]){
            mod[numeros[i]]++;
        }else{
            mod[numeros[i]]=1;
        }
    }

    
}