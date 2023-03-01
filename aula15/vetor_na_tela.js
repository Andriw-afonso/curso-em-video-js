let valores = [3,4,3,5,6,6,7,8,9,1,2,2]

console.log(valores[0])

for (let posicao = 0 ; posicao < valores.length; posicao++){
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}

let valores = [3,4,3,5,6,6,7,8,9,1,2,2]
for ( let posicao in valores){
    console.log(valores[posicao])
}

let valores = [3,4,3,5,6,6,7,8,9,1,2,2]
valores.indexOf(3)