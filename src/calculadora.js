function somarDoisNumeros (valor1, valor2) {
    const resultadoSomaDeDoisNumeros = valor1 + valor2;
    return resultadoSomaDeDoisNumeros;
}

function calcularMediaDeDoisValores (valor1, valor2) {
    const restuadoSomaDoisValores = somarDoisNumeros(valor1 + valor2);
    const resultaDaMediaDeDoisValores = restuadoSomaDoisValores / 2;
    return resultaDaMediaDeDoisValores;
}

module.exports = {
    somarDoisNumeros,
    calcularMediaDeDoisValores
}