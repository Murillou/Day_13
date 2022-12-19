// $c para estilizar algo ou modificar algo especifico

console.log('%c30 Dias%c %cde%c %cJavaScript%c',
    'color:blue',
    '',
    'color:red',
    '',
    'color:purple',
    ''    
)

//console.warn() serve para alertar o navegador

//console.error() serve para dar mensagem de erro


/* console.table() precisa de um array ou objeto. 
    mostrará 2 colunas, uma com o indice e outra com os valores
*/
const nomes = ['Murillo', 'Vinícius', 'Ferreira', 'Pontes']
console.table(nomes)
/* 
    com o objeto mostrará 2 colunas, a de indice ira conter as chaves, e os valores irão conter os valores
*/
const usuario = {
    nome: 'Murillo',
    titulo: 'Programador',
    idade: 20,
    país: 'Brasil',
    estado: 'Paraíba'
}
console.table(usuario) 
/*
outro exemplo, terá 3 colunas uma com os indices e outra com a chave e valor
*/
const país = [
    ['Brasil', 'Brasília'],
    ['França', 'París'],
    ['Itália', 'Peperoni'],
]
console.table(país)

// console.time() e console.timeEnd, inicia e encerra um cronometro

// console.info() informa uma mensagem
console.info('30 dias de javascript')

// console.assert(), escreve uma mensagem de erro com se houver uma assertação falsa
console.assert(4 > 3, '4 é maior que 3')
console.assert(3 > 4, '3 não é maior que 4')

// console.group(), pode ajudar a agrupar varios tipos de grupos

// console.count(), conta quantas vezes uma função foi chamada

const func = () => {
    console.count('Quantas vezes essa função foi chamada')
}
func()
func()
func()
func()

// console.clear(), limpa o console do browse