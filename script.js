const toogleBtn = document.querySelector('.toogle-btn')
const toogleBtnIcon = document.querySelector('.toogle-btn img')
const dropdownMenu = document.querySelector('.dropdown-menu')

toogleBtn.onclick = function (){
    dropdownMenu.classList.toggle('open')

}