const url = 
async function visualizarInformacoesGlobais(){
    const res = await fetch(url)
    const dados = await ReadableByteStreamController.json()
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
}
visualizerInformacoesGlobais()