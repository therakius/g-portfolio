const hamMenu = document.getElementById('ham-menu');
const navbar = document.getElementById('navbar-mobile');
const buttonToResume = [document.getElementById('resume'), document.getElementById('about-resume'), document.getElementById('resume-mobile')];




hamMenu.addEventListener('click', (e)=>{
    hamMenu.classList.toggle('ph-x')
    navbar.classList.toggle('active')
})

const links = document.querySelectorAll('#navbar-mobile a')


links.forEach(link => {
    link.addEventListener('click', ()=>{
    hamMenu.classList.toggle('ph-x')
    navbar.classList.toggle('active')
    })
})

buttonToResume.forEach(button =>{
button.addEventListener('click', (e)=>{
        window.open("https://drive.google.com/file/d/1s7R809c2zzWXX-Cr2bDsQUkT6FDKOtq7/view?usp=drive_link", "_blank")
    })
});