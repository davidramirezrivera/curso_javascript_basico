const title = document.querySelector('h1');
const formu = document.querySelector('#formulario')
const valueA = document.querySelector('#valorA');
const valueB = document.querySelector('#valorB');
const btn = document.querySelector('#btnCalcular');
const resul = document.getElementById("resultado");

//////////////////////////////////////////////////////////////////////
/* btn.addEventListener('click',btnclick);

function btnclick(){
    let res = parseInt(valueA.value) + parseInt(valueB.value);
    resul.innerText = "el resultado es: " + res;
} */

////////////////////////////////////////////////////////////////////
/* formu.addEventListener('submit',btnclick);

function btnclick(event){
    event.preventDefault(); //los formularios por defecto recargan la paigna pero este comando preventDefault evita eso
    //pero toca colocar el parametro event de la funcion (este es el que viene del addeventlistener) 
    let res = parseInt(valueA.value) + parseInt(valueB.value);
    resul.innerText = "el resultado es: " + res;
} */

//////////////////////////////////////////////////////////////////////
/* la otra opcion para evitar el recargar la pagina es usar el addEventListener pero del boton y el boton tendria queasignarsele el type buttom para evitar el recargar */
 btn.addEventListener('click',btnclick);

function btnclick(){
    let res = parseInt(valueA.value) + parseInt(valueB.value);
    resul.innerText = "el resultado es: " + res;
} 

//al usar la etiqueta form en html el ultimo boton se trata como un sbumit y recarga la pagina 
//entonces en lugar de usar el addeventlistener click usariamos un addeventlistener submit