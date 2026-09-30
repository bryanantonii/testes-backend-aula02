**Alunos:** Bryan Eduardo de Antoni da Silva, Henrique Guilherme Rosa & William Davi Georg · **Turma:** 2026-1 Programação Full Stack

## Como rodar

Em cada pasta (`calculadora` e `boletim-escolar`):

    npm install
    npm test

## Parte A — Exercício 2

O teste de 0.1 + 0.2 falhou com Received: 0.30000000000000004.
O problema não está na função somar, e sim na forma como o
computador guarda números decimais.

## Parte B — Plano de testes

| Caso | Função | Entrada | Esperado | Obtido |
|---|---|---|---|---|
| CT-01 | calcularMedia | [5, 6] | 5.5 | 5.5 |
| CT-02 | situacao | 7 | "Aprovado" | "Aprovado" |
| CT-03 | situacao | 4.9 | "Reprovado" | "Reprovado" |
| CT-04 | estaAprovado | 6 | false | false |
| CT-05 | quantidadeAcimaDe | [4, 7, 8.5, 6.9], 7 | 2 | 2 |
| CT-06 | maiorNota | [6, 9.5, 8] | 9.5 | 9.5 |
| CT-07 | estaAprovado | 8 | true | true |

## Parte C — Relato de bug

- Caso que falhou: CT-05, reprovadoPorFalta(40, 10)
- Esperado: false · Obtido: true
- Erro: "abaixo de 75%" foi interpretado como "até 75%"
- Defeito: src/frequencia.js, linha 8 (presenca <= 75)
- Falha: aluno com 75% de presença aparece reprovado
- Correção: trocar <= por <

## Resultado final

calculadora:     Tests: 12 passed, 12 total
boletim-escolar: Tests: 12 passed, 12 total
