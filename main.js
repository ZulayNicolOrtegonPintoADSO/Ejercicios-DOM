addEventListener("DOMContentLoaded", (e)=>{
    addEventListener("submit", (e) => {
        e.preventDefault();
        let entrada = Object.fromEntries(new FormData(e.target));
        console.log(entrada);
        let h = entrada.horas
        let pags = 5208.33
        pago = h*pags

        console.log(`${pago}`)
        document.body.insertAdjacentHTML("beforeend", `<div class="tecto">el pago de nomina que le corresponde es: ${pago}<div>`)
    })
})