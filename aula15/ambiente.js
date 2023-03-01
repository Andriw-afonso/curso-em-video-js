let vetor = [5,3,7,8,1,2,3]

console.log(`O vetor tem o comprimento de ${vetor.length} posições`)
console.log(`O ventor está ordenando em forma crescente: ${vetor.sort()}`)
vetor.push(4)
console.log(`Acrescenteu um valor ao vetor, tamanho atual : ${vetor.length}`)
console.log(`Primeiro elemento do vetor: ${vetor[0]}`)

for (let posicao = 0 ; posicao < vetor.length; posicao++){
    console.log(vetor[posicao])
}