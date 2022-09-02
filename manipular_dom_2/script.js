const title = document.querySelector('h1');
const valueA = document.querySelector('#valorA');
const valueB = document.querySelector('#valorB');
const btn = document.querySelector('#btnCalcular');
const resul = document.getElementById("resultado");

console.log(resul);
function btnclick(){
    let res = parseInt(valueA.value) + parseInt(valueB.value);
    resul.innerText = "el resultado es: " + res;
}
//addEventListener