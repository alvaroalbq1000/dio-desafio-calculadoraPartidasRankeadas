// Programa em JavaScript (.js) para resolver o desafio Calculadora de Partidas Rankeadas

// Declarando as variáveis
let username = "Alvaro_G10" // Coloque seu nome de jogador aqui
let vitorias = 99           // Coloque a qtd de vitórias do seu jogador aqui
let derrotas = 75           // Coloque a qtd de derrotas do seu jogador aqui

// Função que calcula o saldo das partidas rankeadas
// Recebe a quantidade de vitórias e de derrotas como parâmetros e retorna a diferença entre essas quantidades
function calculaSaldo(vit, der){
    return vit-der
}

// Função que pega o nível do jogador
// Recebe a quantidade de vitórias como parâmetro e retorna a string do nível correspondente à essa quantidade
// Para isso utiliza os IFs encadeados e os operadores
function pegarNivel(vit){
    if(vit <= 10){
        return "Ferro"
    }else if((vit >= 11) && (vit <= 20)){
        return "Bronze"
    }else if((vit >= 21) && (vit <= 50)){
        return "Prata"
    }else if((vit >= 51) && (vit <= 80)){
        return "Ouro"
    }else if((vit >= 81) && (vit <= 90)){
        return "Diamante"
    }else if((vit >= 91) && (vit <= 100)){
        return "Lendário"
    }else{  // Como só restam valores maiores ou iguais a 101, já é o caso contrário final (else)
        return "Imortal"
    } 
}

// Declarando as variáveis cujos valores são obtidos pelas funções acima
let saldoVitorias = calculaSaldo(vitorias,derrotas)
let nivel = pegarNivel(vitorias)

// Imprimindo a frase final com o nome do Herói, seu saldo e seu nível
console.log(`O Herói ${username} tem saldo de ${saldoVitorias} e está no nível ${nivel}`)