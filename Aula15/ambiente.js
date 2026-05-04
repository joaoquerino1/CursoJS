let num = [4, 3, 6, 8, 1, 9, 3]
console.log(`O array NUM tem os seguintes numeros: ${num}`)
num.sort()
num.push(7)
console.log(`O array com o método sort() tem os seguintes números: ${num}`)
console.log(`O array tem ${num.length} elementos.`)
console.log(`O primeiro valor do array é ${num[0]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)