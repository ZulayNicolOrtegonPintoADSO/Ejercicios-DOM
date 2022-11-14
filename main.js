const n = document.getElementById("n");
const d = document.getElementById("d");

const respuesta = document.getElementById("resp");
const calcular = document.getElementById("calcular");
calcular.addEventListener('click' , proceso);

function proceso(){
    const N = parseFloat(n.value);
    const D = parseFloat(d.value);
     acumulador = 0
     rta = "¡El número SI es perfecto 🥳!"

    if(N >= 1 && D >=1){
        if( N % D == 0){
            for(let i = 1; i <= N / 2; ++i){
                if(N % i == 0){
                    acumulador += i
                }
            }
            if(acumulador != N){
                rta = "El número NO es perfecto 😕"
            }
        }
    
        respuesta.innerText= rta
    }else{
        respuesta.innerText="NECIOO 😠,Vuelve a intentarlo con los parámetros establecidos 😒"
    }  
}