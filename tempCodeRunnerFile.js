let avisoPrincipal = "y"
let nrosIngresados = []
let num1
let num2
let num3
let num4
let num5
let num6

while(avisoPrincipal === "y") {
    // num1 = prompt("Ingrese el primer número")
    // num2 = prompt("Ingrese el segundo número")
    // num3 = prompt("Ingrese el tercer número")
    // num4 = prompt("Ingrese el cuarto número")
    // num5 = prompt("Ingrese el quinto número")
    // num6 = prompt("Ingrese el sexto número")
    num1 = 2
    num2 = "NERJJR"
    num3 = 2
    num4 = 2
    num5 = 2
    num6 = 2
    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5) || isNaN(num6)) {
        console.log("Ingrese números validos")
    } else {
        nrosIngresados.push(num1, num2, num3, num4, num5, num6)
        break
    }
}
console.log(nrosIngresados)