const Header = document.querySelector('.header')

window.addEventListener('scroll', ()=> changeNavColor(window.scrollY))

function changeNavColor(scrollY){
    const Color = scrollY >=200? '#f0f0f0' : 'transparent';
    Header.style.backgroundColor= Color;
}
