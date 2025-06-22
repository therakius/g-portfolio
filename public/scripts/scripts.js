const hamMenu = document.getElementById('ham-menu');
const navbar = document.getElementById('navbar');



hamMenu.addEventListener('click', (e)=>{
    hamMenu.classList.toggle('ph-x')
    navbar.classList.toggle('active')
})