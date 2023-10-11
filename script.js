
// animação do menu mobile
let menuMobile = document.getElementById('menu');

menuMobile.addEventListener('click', () => {
    document.querySelector('#main-nav').classList.toggle('max-lg:hidden');
    setTimeout(() => {
        document.querySelector('#main-nav').classList.toggle('inactive');
    }, 100)
    document.querySelector('body').classList.toggle('opacity')
})


// função que mostra qual página está ativa
const links = document.querySelectorAll('#main-nav ul li a')

function ativarLink(link) {
    const url = location.href
    const href = link.href

    if (url.includes(href)) {
        link.classList.add('header-active')
    }
    // console.log(url)

}

links.forEach(ativarLink)


// função que passa a informação do item selecionado para a página de orçamento 
const parametrosUrl = new URLSearchParams(location.search)

function ativarProduto(parametro) {
    const element = document.getElementById(parametro)
    if (element) {
        element.checked = true
    }
}

parametrosUrl.forEach(ativarProduto)

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event){
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)
    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event){
    const img = event.currentTarget
    galeriaContainer.prepend(img)
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)