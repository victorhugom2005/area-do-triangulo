function calculo(base, altura){
    base = parseInt(prompt("Digite a base do triâgulo"));
    altura = parseInt(prompt("Digite a altura do triâgulo"));
    let resultado = Number(base * altura / 2);
    if (Number.isNaN(resultado)){
        alert("Resultado não é um número");
        calculo();
    } else {
        alert(`${resultado} é a área do triângulo`);
    }
}

calculo();