let nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    
    window.pageYOffset > 90 ? nav.classList.remove('d-none','shadow') : nav.classList.add('d-none','shadow');
})