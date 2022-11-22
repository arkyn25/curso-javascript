const saudacao  = 'Olá' // context lexical

function exec() {
    const saudacao = 'Eai' // context lexical
    return saudacao
}
// Objetos sao grupos aninhados de pares nome/valor
const client = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto. 101',
        bairro: 'Centro',
        cidade: 'São Paulo',
        uf: 'SP'
    }
}

console.log(saudacao);
console.log(exec());

console.log(client)