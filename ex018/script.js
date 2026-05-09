const num = document.querySelector('input#fnum')
const lista = document.querySelector('select#flista')
const res = document.querySelector('div#res')
const valores = []

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        const item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        
    } else {
        window.alert("Valor inválido ou ja encontrado na lista!")
    }
    num.value = ''
    num.focus()
}

function finalizar() {
        if (valores.length == 0) {
            window.alert("Adicione valores antes de finalizar!")
    } else {
        const tot = valores.length
        const maior = Math.max.apply(null, valores)
        const menor = Math.min.apply(null, valores)
        const soma = valores.reduce((a, b) => a + b, 0)
        const media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        }
}