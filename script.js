
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

// evento que mostra e esconde as perguntas da página seguros
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

// evento que muda as fotos da página de cada bicicleta

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


// evento de animação dos elementos descendo
let elementsToShow = document.querySelectorAll('[data-anime-topToBottom]')

function mostraElementosIniciais(event){
    let windowTop = window.scrollY + (window.innerHeight * 1)
    elementsToShow.forEach((element, numberOfElements)=>{
        if(windowTop > element.offsetTop){
            setTimeout(()=>{
                element.classList.add('animate')
            }, 300 * numberOfElements)
        }
        
    })
}

mostraElementosIniciais()

window.addEventListener('scroll', ()=>{
    mostraElementosIniciais(elementsToShow)
})

// evento de crescimento de alguns elementos na página
let elementsToGrow = document.querySelectorAll('[data-anime-cresce]')

function cresceElementos(event){
    let distanciaTopo = window.scrollY + (window.innerHeight * 0.85)
    elementsToGrow.forEach((element, numberOfElements)=>{
        if(distanciaTopo > element.offsetTop){
            setTimeout(function(){
                element.classList.add('animate')
            }, 500* numberOfElements)
        }
    })
}

cresceElementos(elementsToGrow)   

window.addEventListener('scroll', ()=>{
    cresceElementos(elementsToGrow)
})

// segundo evento de animações de elementos descendo
let elementsToShow2 = document.querySelectorAll('[data-anime-topToBottom2]')
function mostraElementos(event){
    let windowTop = window.scrollY + (window.innerHeight * 1)
    elementsToShow2.forEach((element, numberOfElements)=>{
        if(windowTop > element.offsetTop){
            setTimeout(()=>{
                element.classList.add('animate')
            }, 300 * numberOfElements)
        }
        
    })
}

mostraElementos()

window.addEventListener('scroll', ()=>{
    mostraElementos()
})

