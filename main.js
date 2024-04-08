
function abrirOculto(aba){
    document.getElementById(aba).classList.remove("hide")
}

function gerarFiltro(){
    const cidadeFiltrada = document.getElementById("filtroLocal").value;
    
    const dataLocal = document.querySelectorAll('[data-local]')

    dataLocal.forEach(el => {
        const cidadeData = el.getAttribute('data-local')

        
        if(cidadeData === cidadeFiltrada){
            console.log("aheee")
        } else {
            el.classList.add("hide")
        }
    })
    
}
