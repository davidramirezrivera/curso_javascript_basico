// se usa cuando queremos seleccionar una etiqueta 
const titulo = document.querySelector('h1'); //h1{}
const parrafoUno = document.querySelector('p'); //p{}
const parrafoDos = document.querySelector('.parrafito'); //.parrafito{}
const parrafoTres = document.getElementById('pid');//#pid{}
const entrada = document.querySelector('input'); // input;
console.log({
    parrafoUno,
    titulo,
    parrafoDos,
    parrafoTres,
    entrada
});
titulo.innerHTML = "holi cambie el titutlo en js" //este combienter el codigo a hatml
titulo.innerText = "volvi a modificar esto" // este lo hace en texto directamente y es mas seguro que el anterior

//en html si hacemos esto <h1 holi="perra"> el holi se vuelve en un atributo
let x = titulo.getAttribute('holi');
console.log (x);

parrafoDos.setAttribute('class','parrafitoConClaseNueva');//modifica los atributos de una etiqueta

/* titulo.classList.add ('');//agrega clases
titulo.classList.remove('');//elimina clases
titulo.classList.toggle('');//agregar quitar
titulo.classList.contains('');//condicional de true o false si tiene o no la clase */

entrada.value= "254";

const img = document.createElement('img');
img.setAttribute('src','http://k33.kn3.net/taringa/E/6/F/3/9/D/hungaberto/A63.jpg');

parrafoTres.append(img);
