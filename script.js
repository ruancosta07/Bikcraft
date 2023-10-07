let menuMobile = document.getElementById('menu');

menuMobile.addEventListener('click', ()=> {
    document.querySelector('#main-nav').classList.toggle('max-lg:hidden');
    setTimeout(()=>{
        document.querySelector('#main-nav').classList.toggle('inactive');
    }, 100)
    document.querySelector('body').classList.toggle('opacity')
})