const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

function miNombre(name, lastname, nickname){
    console.log("Mi nombre es "+ " " + name + lastname + ", pero prefiero que me digas " + nickname + ".");
}
/////////////////////////////////////////////
let tipSus = ["free", "basic", "expert", "expertduo"];
let resp = ["puedes tomar los cursos gratis", "puedes tomar todos los cursos por un mes ", "puedes tomar todos los cursos por un año ", "puedes tomar todos los cursos por un año con un amigo"];/* 
let sus=prompt("ingrese su tipo de suscripcion"); */
for(i=0;i<tipSus.length;i++){
    if (tipSus[i] == sus){
        console.log(resp[i]);
    }
}
    
    
let suscript = {
    free:"puedes tomar los cursos gratis",
    basic:"puedes tomar todos los cursos por un mes ",
    expert:"puedes tomar todos los cursos por un año ",
    expertduo:"puedes tomar todos los cursos por un año con un amigo"
};
let sus=prompt("ingrese su tipo de suscripcion");
console.log(suscript[sus]);
//// lo mismo de ahorita pero como una funcion
function tiposdesus(suss){
    if(suscript[suss]){
        console.log(suscript[suss]);
        return
    }
    console.log("noexiste ese tipo de suscripcion")
}