const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Teste fa função de soma', () => {
    it('A função deve ser capaz de somar dois números positivos', () => {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros (5, 3);
        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(8);
    });

    it('A deve ser capaz de somar um numero positivo e um negativo', () => {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros (50, -15);
        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(35);
    });
});