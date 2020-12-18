function verificarCPF(){
    let cpf = document.getElementById("entrada").value
    let resultado = ""

    //obter terceiro segmento do CPF 111.222.333-DD
    let segmento = parseInt(cpf.split("-")[0].split(".")[2].split("")[2])

    switch(segmento)
    {
        case 1:
            resultado = "SP"
            break
        case 4:
            resultado = "PB"
            break
        case 9:
            resultado = "RJ"
            break
    }
    document.getElementById("saida").textContent = resultado
}