const nvendedores = document.getElementById("nvendedores");
const sueldob = document.getElementById("sueldo");

const respuesta = document.getElementById("resp");
const calcular = document.getElementById("calcular");
calcular.addEventListener('click' , proceso);

function proceso(){
    const n = parseFloat(nvendedores.value);
    const sueldo = parseFloat(sueldob.value); 
    x=1
    while (x <= n){  
        x += 1  
        let v1 = Number(prompt("Ingrese el valor de venta 1"));
        let v2 = Number(prompt("Ingrese el valor de venta 2"));
        let v3 = Number(prompt("Ingrese el valor de venta 3"));
    
        comision = (v1 + v2 + v3) * 0.10
        
        respuesta.innerText= "El sueldo mensual es: " + sueldo + "\n La comisión del mes es: " + comision + "\n El sueldo mensual es: " + (sueldo+comision)
    }

}