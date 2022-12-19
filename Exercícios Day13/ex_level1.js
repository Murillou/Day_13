const país = ['Canadá', 'Itália', 'Argentina', 'França', 'Brasil']
console.table(país)


console.log('=====OUTRA QUESTÃO=====')

const pais = {
    primeiro: 'Brasil',
    segundo: 'Argentina',
    terceiro: 'França',
    quarto: 'Russia',
    quinto: 'Alemanha'
}
console.table(pais)

console.log('=====OUTRA QUESTÃO=====')

console.group('Array e Objeto')
console.table(país)
console.table(pais)
console.groupEnd()