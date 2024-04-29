
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

function irParaPagina(pagina){
    window.location.href = pagina
}

const meuCheckBox = document.getElementById("TDUcheckBox");
const btnDesab = document.getElementById("TDUDesabilitado");
const btnHabil = document.getElementById("TDUHabilitado");

meuCheckBox.addEventListener('click', function(){
    if(meuCheckBox.checked){
        btnDesab.classList.add("hide");
        btnHabil.classList.remove("hide");
    } else {
        btnDesab.classList.remove("hide");
        btnHabil.classList.add("hide");
    }
})

const meuPlano = document.getElementById("planosAEscolher");
const inputDoPlano = document.getElementById("inputDoPlano")

meuPlano.addEventListener('change', function(){
    inputDoPlano.value = meuPlano.value
})

var fileInput = document.getElementById("fileInput");
var base64Input = document.getElementById("base64Input");

fileInput.addEventListener("change", function() {
    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        
        if (file.type.startsWith('image/')) {
            if (file.size <= 1024 * 1024) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    var base64Content = event.target.result;
                    
                    base64Input.value = base64Content;
                };

                reader.readAsDataURL(file);
            } else {
                alert("O tamanho do arquivo excede 1 MB. Por favor, selecione um arquivo menor.");
                fileInput.value = ""; // Limpa o valor do <input type="file">
            }
        } else {
            alert("Por favor, selecione um arquivo de imagem.");
            fileInput.value = ""; // Limpa o valor do <input type="file">
        }
    } else {
        // Se nenhum arquivo foi selecionado, limpa o valor do <input type="text">
        base64Input.value = "";
    }
});