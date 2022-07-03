/* Programa que pida 6 números por pantalla y los guarde en un array*/

let avisoPrincipal = prompt("Va a tener que ingresar 6 números para ejecutar un programa. Para continuar escriba y", "y")
let nrosIngresados = []
let num1, num2, num3, num4, num5, num6

while(avisoPrincipal === "y") {
    num1 = parseInt(prompt("Ingrese el primer número"))
    num2 = parseInt(prompt("Ingrese el segundo número"))
    num3 = parseInt(prompt("Ingrese el tercer número"))
    num4 = parseInt(prompt("Ingrese el cuarto número"))
    num5 = parseInt(prompt("Ingrese el quinto número"))
    num6 = parseInt(prompt("Ingrese el sexto número"))
    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5) || isNaN(num6)) {
        alert("Ingrese números validos")
    } else {
        nrosIngresados.push(num1, num2, num3, num4, num5, num6)
        break
    }
}

/* Mostrar el array anterior con todos sus elemenos en el cuerpo de la página y en la consola */

document.write("El array con los números ingresados es: " + nrosIngresados + "<br>")
console.log("El array con los números ingresados es: " + nrosIngresados)

/* Ordenar (alfabeticamente o de mayor a menor)el array anterior y mostrarlo*/

nrosIngresados.sort((a, b) => b - a)
document.write("Array ordenado de mayor a menor: " + nrosIngresados + "<br>")

/* Invertir el orden del array anterior y mostrarlo*/

nrosIngresados.sort((a, b) => a - b)
document.write("Array ordenado de menor a mayor: " + nrosIngresados + "<br>")

/* Mostrar cuantos elementos tiene el array anterior*/

document.write("El array tiene " + nrosIngresados.length + " elementos." + "<br>")

/* Busqueda de un valor introducido por el usuario que nos indique si se encuentra o no en el array*/

nrosBuscado = parseInt(prompt("Ingrese un número buscado"))
if(nrosIngresados.includes(nrosBuscado)) {
    document.write("El " + nrosBuscado + " si se encuentra en el Array")
} else {
    document.write("El " + nrosBuscado + " no se encuentra en el Array")
}