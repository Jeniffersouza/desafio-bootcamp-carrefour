//Função útil para o calculo do imposto (baseado nas aliquotas).
function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
        return aliquota * salario;
    } else if(salario > 1100 && salario <= 2500){
        aliquota = 0.10;
        return aliquota * salario;
    }else if(salario > 2500 ){
        aliquota = 0.15;
        return aliquota * salario;
    }
    //TODO Criar as demais condições para as aliquotas de 10.00% e 15.00%.
    
}

//Lê os valores de Entrada:
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

//Calcula o imposto através da função "calcularImposto":
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a Saída (com 2 casas decimais):
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));