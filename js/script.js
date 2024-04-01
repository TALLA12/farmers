let navbar =document.querySelector('.header .navbar');
let searchForm=document.querySelector('.header .search-form');
let loginForm=document.querySelector('.header .login-form');
let contactInfo=document.querySelector('.contact-info');
let slides=document.querySelectorAll('.slide-container');
let index=0;
// next function
function next(){
    slides[index].classList.remove('active');
    index=(index+1)% slides.length;
    slides[index].classList.add('active');
}
// previous function
function prev(){
    slides[index].classList.remove('active');
    index=(index -1 + slides.length)% slides.length;
    slides[index].classList.add('active');
}
setInterval(next,7000);
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
   
    loginForm.classList.remove('active');
}
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
   
}
document.querySelector('#info-btn').onclick=()=>{
    contactInfo.classList.add('active');
}
document.querySelector('#close-contact-info').onclick=()=>{
    contactInfo.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactinfo.classList.remove('active');
}

  
  
  