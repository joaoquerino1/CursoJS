function contar() {
    let inicio = document.getElementById('txtinicio').value
    let fim = document.getElementById('txtfim').value
    let passo = document.getElementById('txtpasso').value
    let status = document.getElementById('status')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('[ERRO] Você precisa preencher todos os campos!')
    } else {
        status.innerHTML = 'Contando: '
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando que será o Passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                status.innerHTML += `${c} \u{1F449}`
            }
            status.innerHTML += '\u{1F3C1}'
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                status.innerHTML += ` ${c} \u{1F449}`
            }
            status.innerHTML += '\u{1F3C1}'
        }
    }
}