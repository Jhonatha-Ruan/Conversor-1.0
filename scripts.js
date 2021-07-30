let botao = document.getElementById('botao')
let selectMoedas = document.getElementById('select-moedas')


async function clickbotao() {

    let moedas = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL').then(function (resposta) {
        return resposta.json()
    })
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    console.log(dolar)
    console.log(euro)




    let inputValorReais = Number(document.getElementById('input').value)
    let inputMoedas = document.getElementById('input-moedas')
    let inputReal = document.getElementById('input-real')

    if (selectMoedas.value === 'US$ Dólar Americano') {
        let valorEmDolar = inputValorReais / dolar
        inputMoedas.innerHTML = valorEmDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (selectMoedas.value === '€ Euro') {
        let valorEmEuro = inputValorReais / euro
        inputMoedas.innerHTML = valorEmEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

    }


    inputReal.innerHTML = inputValorReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

}

function selectchange() {
    let textoMoedas = document.getElementById('texto-moedas')
    let bandeiraMoedas = document.getElementById('bandeiras-moedas')

    if (selectMoedas.value === 'US$ Dólar Americano') {
        textoMoedas.innerHTML = 'Dólar Americano'
        bandeiraMoedas.src = './img/eua.png'
    }


    if (selectMoedas.value === '€ Euro') {
        textoMoedas.innerHTML = 'Euro'
        bandeiraMoedas.src = './img/euro.png'
    }

    clickbotao()

}




botao.addEventListener('click', clickbotao)
selectMoedas.addEventListener('change', selectchange)