function conversaoMoeda(){
    let resultado = ""
    var opcao = document.getElementById("opções").value; 
    let valor = document.getElementById("text2").value;
    let dolarAmericano = 5.0;
    let dolarCanadense = 4.0;
    let dolarAustraliano = 3.0;
    switch (opcao){
        case "US$":
            document.getElementById("valorFinal").textContent = (valor/dolarAmericano).toFixed(2);
            break
        case "C$":
            document.getElementById("valorFinal").textContent = (valor/dolarCanadense).toFixed(2);
            break
        case "A$":
            document.getElementById("valorFinal").textContent = (valor/dolarAustraliano).toFixed(2);
            break
        default:
            document.getElementById("valorFinal").textContent = resultado
    }
}