/* // criação objeto estudante

const estudante = {
    Nome: "João", 
    Sobrenome: "Vitor",
    NumeroMatricula: 403865,
    NotasSemestre: [12, 3.4, 56, 44]
}

console.log(`Objeto Estudante:`, estudante)


// add uma nova propiedade ao objeto estudante

estudante.modulo = `HTML Basico`

console.log(`Objeto estudante com modulo:`, estudante)

//imprimindo informações objetos estudantes

console.log('Nome da Pessoa estudante:', estudante.Nome)

console.log('Segunda Nota do semestre', estudante.NotasSemestre[1])

console.log('Modolu atual:', estudante.modulo)

// fazendo copia objeto estudante

const CopiaEstudante = {...estudante}

console.log(`Copia do objeto estudante`, CopiaEstudante)

// Alterando o valor da propiedade nome

CopiaEstudante.Nome = `AstroDev`
console.log(`Copia com o nome alterado`, CopiaEstudante)

// Adicionando a nota 9 do semestre

//CopiaEstudante.NotasSemestre.push(9)
CopiaEstudante.NotasSemestre = [...CopiaEstudante.NotasSemestre, 9]
console.log(`Copia com a nova nota adicionada`, CopiaEstudante)

// Alterando o valor da propiedade Modulo

CopiaEstudante.modulo = `FlexBox e Grid`
console.log(`Copia com o modulo alterado:`, CopiaEstudante)

// Criação do array EstudantesLaBenu

const EstudantesLaBenu = []
EstudantesLaBenu.push(estudante)
EstudantesLaBenu.push(CopiaEstudante)

console.log(`Array De Estudantes LaBenu:`, EstudantesLaBenu) */

const Carrinho = {
    Nome: 'João',
    FormaPagamento: 'Debito',
    Endereço: 'Rua Rosa Almestalden Cantelli, 65',
    compras:[{
        NomeProduto: 'Banana',
        PrecoProduto: 23.5,
        QuantidadeUnidadesProdutos: 2,
    }]
}

console.log(Carrinho)

console.log(`Quantidade De Compras:`, Carrinho.compras[0].QuantidadeUnidadesProdutos)

const CopiaCarrinho = {...Carrinho}

CopiaCarrinho.Nome = 'VITOR'
CopiaCarrinho.FormaPagamento = 'Cartão Presente'

console.log(`Copia Carrinho:`, CopiaCarrinho)


