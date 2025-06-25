const hamMenu = document.getElementById('ham-menu');
const navbar = document.getElementById('navbar-mobile');



hamMenu.addEventListener('click', (e)=>{
    hamMenu.classList.toggle('ph-x')
    navbar.classList.toggle('active')
})

const links = document.querySelectorAll('#navbar-mobile a')
console.log(links)

links.forEach(link => {
    link.addEventListener('click', ()=>{
    hamMenu.classList.toggle('ph-x')
    navbar.classList.toggle('active')
    })
})
