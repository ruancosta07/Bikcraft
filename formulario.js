const formulario = document.querySelector('form')
const formularioEnviadoSucesso = document.getElementById('formulario-sucesso')
const barraInferiorFormulario = document.getElementById('formulario-sucesso-underline')


// função que desabilita o formulário e aciona o feedback visual do envio
function enviarFormulario(evento){
    evento.preventDefault()
    const botao = document.querySelector('form button')
    botao.disabled = true
    botao.innerText = 'Enviando...'
    setTimeout(()=>{
        botao.innerText = 'Enviado!'
        formularioEnviadoSucesso.classList.toggle('hidden')
        setTimeout(()=>{
            formularioEnviadoSucesso.classList.toggle('translate-x-[100%]')
            formularioEnviadoSucesso.classList.toggle('opacity-0')
            barraInferiorFormulario.classList.add('translate')
        }, 100)
        setTimeout(()=>{
            formularioEnviadoSucesso.classList.toggle('translate-x-[100%]')
            formularioEnviadoSucesso.classList.toggle('opacity-0')
        }, 5000)
    }, 2000)
}

formulario.addEventListener('submit', enviarFormulario)