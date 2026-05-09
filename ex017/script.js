function gerarTabuada() {
    const num = document.getElementById('txtnum')
    const tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }else {
        const n = Number(num.value)
        const c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            const item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}