const key = '07dfc9a97ed7a733341570c5db5268cc'

function colocarDadosNaTela(dados) {
  document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
  document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + 'ºC'
  document.querySelector('.texto-previsao').innerHTML =
    dados.weather[0].description
  document.querySelector('.umidade').innerHTML =
    'Umidade do tempo está: ' + dados.main.humidity + '%'

  document.querySelector(
    '.img-previsao'
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

  document.querySelector('.temp-min').innerHTML =
    'Miníma: ' + Math.floor(dados.main.temp_min) + 'ºC'

  document.querySelector('.temp-max').innerHTML =
    'Máxima: ' + Math.floor(dados.main.temp_max) + 'ºC'

  console.log(dados)
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then(response => response.json())

  colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
  const cidade = document.querySelector('.input-cidade').value

  buscarCidade(cidade)
}
