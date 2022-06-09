const Header = document.querySelector('.header')
const toggleBtn = document.querySelector('.toggle');
const navBar = document.querySelector(".navigation")
const I = document.querySelector(".fa-bars")
window.addEventListener('scroll', ()=> changeNavColor(window.scrollY))

function changeNavColor(scrollY){
    const Color = scrollY >=150? '#f0f0f0' : 'transparent';
    Header.style.backgroundColor= Color;
}

toggleBtn.addEventListener('click' , showHideNavBar)

function showHideNavBar(){
    navBar.classList.toggle("hide")
    const btnClasss = navBar.classList.contains('hide')?'bars':'times';
    I.classList=`fa fa-${btnClasss}`;
}