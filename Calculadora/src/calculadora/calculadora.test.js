// const somar = require('./calculadora');
// const multiplicacao = require('./calculadora');

import { somar } from "./calculadora";
import { multiplicacao } from "./calculadora";

describe('Operações matemáticas', () => {
    //it
    test('Deve somar e multiplicar dois números', () => {
        //Arrange
        const a = 2;
        const b = 5;
        const esperadoSomar = 7;

        const c = 3;
        const d = 5;
        const esperadoMultiplicacao = 15;

        //Act
        const resultado = somar(2,5);
        const resultadoM = multiplicacao(3,5);

        //Assert
        expect(resultado).toBe(esperadoSomar)
        expect(resultadoM).toBe(esperadoMultiplicacao)
    })
})