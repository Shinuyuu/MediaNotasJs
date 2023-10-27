alert('Calculo de Média - Digite suas notas😀')
alert('Por favor, digite somente notas entre 0 a 10.')
let n1 = Number(prompt('Nota 1'))
let n2 = Number(prompt('Nota 2'))
let n3 = Number(prompt('Nota 3'))
let n4 = Number(prompt('Nota 4'))


if (n1 < 0 || n1 > 10
    || n2 < 0 || n2 > 10
    || n3 < 0 || n3 > 10
    || n4 < 0 || n4 > 10) {
}

else {
    let numeros = (n1 + n2 + n3 + n4)
    let divisao = (numeros / 4)

    if (divisao < 5) {
        alert(`Voce ficou com média ${divisao.toFixed(1)}. Resultado: Reprovado, Esperava mais de você...😓`)
    }
    else if (divisao < 7) {
        alert(`Voce ficou com média ${divisao.toFixed(1)}. Resultado: Em recuperacao, se esforce um pouco mais que você consegue😄`)
    }
    else {
        alert(`Voce ficou com média ${divisao.toFixed(1)}. Resultado: Aprovado, Parabéns🥳`)
    }
}